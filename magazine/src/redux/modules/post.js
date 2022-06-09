// post.js
import { auth, db, storage } from "../../shared/firebase";
import { collection, addDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import moment from 'moment';

// action
const LOAD = "post/LOAD"
const ADD = "post/ADD";
const DELETE = "post/DELETE";

// const postDB = collection(db, "post");

// action creator
export const loadPost = (post_list) => {
    return { type: LOAD, post_list }
}
export const addPost = (post) => {
    return { type: ADD, post };
}
export const deletePost = (post) => {
    return { type: DELETE, post }
}


const initialState = {
    list: [],
    is_loading: false,
}

const initialPost = {
    image_url: 'https://i.pinimg.com/564x/bf/b1/47/bfb1479373f849d17845645f4290132b.jpg',
    contents: '하이룽',
    like: 0,
    layout: 'right',
    insert_date: moment().format('YYYY-MM-DD hh:mm:ss'),
}

// middlewares

export const addpostFB = (contents = "", layout = "right", image_url = "") => {
    return async function (dispatch, getState) {
        const _user = getState().user.user;
        console.log("user", _user)

        const user_info = {
            name: _user.name,
            user_id: _user.uid,
        }

        const _post = {
            ...initialPost,
            layout,
            contents,
            image_url,
            insert_date: moment().format('YYYY-MM-DD hh:mm:ss'),
        }

        console.log(user_info.user_id);
        console.log({ ...user_info, ..._post });

        const _upload = await uploadBytes(ref(storage, `images/${user_info.user_id}`), image_url)

        const _getUrl = await getDownloadURL(_upload.ref)
            .then((url) => {
                addDoc(collection(db, "post"), ({ ...user_info, ..._post })).then((doc) => {
                    let post = { user_info, ..._post, id: doc.id }
                    console.log("post", post)
                    dispatch(addPost(post))
                }).catch((error) => {
                    console.log("error", error)
                })
            })
        console.log(_getUrl)
    }
}

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case ADD:
            console.log("action", action.post)
            state.list.unshift(action.post);
            return state;
        default:
            return state;
    }
}