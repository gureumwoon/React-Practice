import React, { useRef, useState } from 'react'
import { auth, db } from './../shared/firebase';
import { getDocs, where, query, collection } from "firebase/firestore"
import { signInWithEmailAndPassword } from "firebase/auth"
import styled from 'styled-components';
import Nav from '../components/Nav'
import { useNavigate } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const navigate = useNavigate();

    const idRef = useRef(null);
    const pwRef = useRef(null);

    const onChange = (event) => {
        const { target: { name, value }, } = event;
        if (name === "email") {
            setEmail(value);
        } else if (name === "password") {
            setPassword(value);
        }
    }

    const onSubmit = async (event) => {
        event.preventDefault();
        console.log(idRef.current.value, pwRef.current.value);
        try {
            const user = await signInWithEmailAndPassword(
                auth,
                idRef.current.value,
                pwRef.current.value
            );
            console.log(user)

            const user_docs = await getDocs(query(collection(db, "users"), where("user_id", "==", user.user.email)));
            user_docs.forEach(u => { console.log(u.data()) })
            navigate("/")

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <section>
            <Nav />
            <FormSection onSubmit={onSubmit}>
                <h1>로그인</h1>
                <label htmlFor="id">
                    <p>아이디</p>
                    <Input
                        type="text"
                        name="email"
                        id="id"
                        required
                        ref={idRef}
                        value={email}
                        onChange={onChange}
                    />
                </label>
                <label htmlFor="pw">
                    <p>비밀번호</p>
                    <Input
                        name="password"
                        type="password"
                        id="pw"
                        required
                        ref={pwRef}
                        value={password}
                        onChange={onChange}
                    />
                </label>
                <JoinBtn onClick={onSubmit} type="submit">로그인</JoinBtn>
            </FormSection>
        </section>
    )
}

const FormSection = styled.div`
  margin-top: 70px;
  width: 100%;
  h1 {
      text-align: left;
      margin-bottom: 40px;
  }
  label>p{
      margin:5px 0;
      text-align: left;
  }
`

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 2px solid rgba(27, 156, 252, 0.55);
  &:focus {
      outline:none;
      border-color: #1B9CFC;
  }
`

const JoinBtn = styled.button`
  width: 40%;
  background-color: rgba(27, 156, 252, 0.55);
  color: white;
  border: none;
  cursor: pointer;
  height: 40px;
  border-radius: 6px;
  margin-top: 30px;
`

export default Login