import { storage } from '../../shared/firebase';

// actions
const UPLOADING = 'image/UPLOADING';
const PREVIEW = 'image/PREVIEW';
const UPLOAD = 'image/UPLOAD';

// action creators
export const uploading = (uploading) => {
    return { type: UPLOADING, uploading }
}
export const previewImg = (preview) => {
    return { type: PREVIEW, preview }
}
export const upload = (image_url) => {
    return { type: UPLOAD, image_url }
}

// initial state
const initialState = {
    image_url: "http://via.placeholder.com/400x300",
    uploading: false,
    preview: null,
}

// export const uploadImgFB = (image) => {
//     return function (dispatch) {
//         dispatch(uploading(true))
//         console.log(`images/${new Date().getTime()}_${image.name}`)

//         const _upload = storage.ref(`images/${image.name}`).put(image)

//     }
// }


// reducers
export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case "image/PREVIEW":
            state.preview = action.preview;
            return state;
        default:
            return state;
    }
}