// voca.js
import { db } from "../../firebase";
import { collection, getDoc, getDocs, addDoc, updateDoc, doc, deleteDoc } from 'firebase/firestore';

// Actions

const LOAD = "voca/LOAD";
const CREATE = "voca/CREATE";
const COMPLETE = "voca/COMPLETE";
const MODIFY = "voca/MODIFY";
const DELETE = "voca/DELETE";


const initialState = {
    list: [
        // { id: 0, word: 'apple', meaning: '사과', sentence: 'He ate the apple, stalk and all.', trans: '그는 그 사과를 속심까지 다 먹었다.' },
        // { id: 1, word: 'banana', meaning: '바나나', sentence: 'Cut the banana in half lengthways.', trans: '바나나를 길게 절반으로 잘라라.' }
    ],
}


// Action Creators
export function loadVoca(voca_list) {
    return { type: LOAD, voca_list };
}
export function createVoca(voca) {
    return { type: CREATE, voca: voca };
}
export function completeVoca(voca_index) {
    return { type: COMPLETE, voca_index }
}
export function modifyVoca(voca, voca_index) {
    return { type: MODIFY, voca, voca_index }
}
export function deleteVoca(voca_index) {
    return { type: DELETE, voca_index }
}

// middlewares
export const loadVocaFB = () => {
    return async function (dispatch) {
        const voca_data = await getDocs(collection(db, "word"))

        let voca_list = [];

        console.log(voca_list)



        voca_data.forEach((v) => {
            voca_list.push({ id: v.id, ...v.data() })
        });

        dispatch(loadVoca(voca_list))

    }
}


export const addVocaFB = (voca) => {
    return async function (dispatch) {
        const docRef = await addDoc(collection(db, "word"), voca);
        // const _voca = await getDoc(docRef);
        const voca_data = { id: docRef.id, ...voca }

        dispatch(createVoca(voca_data))
    }
}


export const completedVocaFB = (voca_id) => {
    return async function (dispatch, getState) {
        const docRef = doc(db, "word", voca_id)
        await updateDoc(docRef, { completed: true });

        const _voca_list = getState().voca.list
        const voca_index = _voca_list.findIndex((v) => {
            return v.id === voca_id
        })
        dispatch(completeVoca(voca_index))
    }
}

export const modifyVocaFB = (voca, voca_id) => {
    return async function (dispatch, getState) {
        const docRef = doc(db, "word", voca_id)
        await updateDoc(docRef, {
            word: voca.word,
            meaning: voca.meaning,
            sentence: voca.sentence,
            trans: voca.trans,
        });
        const _voca_list = getState().voca.list
        const voca_index = _voca_list.findIndex((v) => {
            return v.id === voca_id
        })

        dispatch(modifyVoca(voca, voca_index))
    }
}


export const deleteVocaFB = (voca_id) => {
    return async function (dispatch, getState) {
        if (!voca_id) {
            window.alert("아이디가 엄서용")
            return;
        }
        const docRef = doc(db, "word", voca_id);
        await deleteDoc(docRef);

        const _voca_list = getState().voca.list;
        const voca_index = _voca_list.findIndex((v) => {
            return v.id === voca_id
        })
        dispatch(deleteVoca(voca_index))
    }
}




// Reducer
export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case LOAD: {
            return { list: action.voca_list }
        }
        case CREATE:
            return { list: [...state.list, action.voca] }
        case COMPLETE: {
            const new_voca_list = state.list.map((v, idx) => {
                if (action.voca_index === idx) {
                    return { ...v, completed: !v.completed }
                } else {
                    return v;
                }
            })
            return { list: new_voca_list };
        }
        case MODIFY: {
            const modified_voca_list = state.list.map((v, idx) =>
                parseInt(action.voca_index) === idx ? { ...v, ...action.voca } : v
            )
            return { ...state, list: modified_voca_list }
        }
        case DELETE:
            const newVocaList = state.list.filter((v, idx) => {
                return action.voca_index !== idx;
            })
            return { list: newVocaList };
        // do reducer stuff
        default:
            return state;
    }
}
