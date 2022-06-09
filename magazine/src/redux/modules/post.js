// post.js
import { auth, db, storage } from "../../shared/firebase";
import { collection, addDoc, deleteDoc, doc, getDocs } from 'firebase/firestore';
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
export const deletePost = (post_id) => {
    return { type: DELETE, post_id }
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
export const loadpostFB = () => {
    return async function (dispatch) {
        const post_data = await getDocs(collection(db, "post"))

        let post_list = [];

        post_data.forEach((p) => {
            post_list.push({ id: p.id, ...p.data() })
        })

        dispatch(loadPost(post_list))
    }
}

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

        await getDownloadURL(_upload.ref)
            .then((url) => {
                addDoc(collection(db, "post"), ({ ...user_info, ..._post })).then((doc) => {
                    let post = { user_info, ..._post, id: doc.id }
                    console.log("post", post)
                    dispatch(addPost(post))
                }).catch((error) => {
                    console.log("error", error)
                })
            })
    }
}

export const deletepostFB = (post_id) => {
    return async function (dispatch, getState) {
        if (!post_id) {
            window.alert('아이디가 엄서용')
            return
        }
        const docRef = doc(db, "post", post_id)
        await deleteDoc(docRef);

        const post_list = getState().post.list
        const post_index = post_list.findIndex((p) => {
            return p.id === post_id
        })
        dispatch(deletePost(post_index))
    }
}

// reducers
export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case LOAD: {
            return { list: action.post_list }
        }
        case ADD:
            console.log("action", action.post)
            state.list.unshift(action.post);
            return state;
        case DELETE:
            const newPostList = state.list.filter((p, i) => {
                return action.post_index === i
            })
            return { list: newPostList }
        default:
            return state;
    }
}