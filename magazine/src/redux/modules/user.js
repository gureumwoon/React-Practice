// user.js
import { db, auth } from "./../../shared/firebase";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { collection, getDoc, getDocs, addDoc, updateDoc, doc, deleteDoc } from 'firebase/firestore';


// Actions

const ACCOUNT = "user/ACCOUNT";
const LOGIN = "user/LOGIN";
const LOGOUT = "user/LOGOUT";

const initialState = {
    user: null,
    is_login: false,
}

// Action Creators
export function accountUser(user) {
    return { type: ACCOUNT, user }
}
export function logInUser(user) {
    return { type: LOGIN, user }
}
export function logOutUser(user) {
    return { type: LOGOUT, user }
}

// middlewares
export const signup = async (event) => {
    event.preventDefault();
    try {
        const user = await createUserWithEmailAndPassword(
            auth,
            user_id,
            user_pw
        );
        console.log(user)

        const user_doc = await addDoc(collection(db, "users"), {
            user_id: user.user.email,
            name: nameRef.current.value,
        });
        console.log(user_doc.id)
        window.alert(`환영해요! ${nameRef.current.value}님 :)! 로그인도 부탁드려요!`);
        navigate("/login")
    } catch (error) {
        console.log(error);
    }
}
