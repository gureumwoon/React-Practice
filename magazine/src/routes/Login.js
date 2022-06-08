import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import Nav from '../components/Nav'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { apiKey } from '../shared/firebase'
import { loginFB } from '../redux/modules/user';

function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const state = useSelector((state) => state.user)
    const _session_key = `firebase:authUser:${apiKey}:[DEFAULT]`;
    const is_session = sessionStorage.getItem(_session_key) ? true : false;


    const emailCheck = (email) => {
        let reg = /^[0-9a-zA-Z]([-_.0-9a-zA-Z])*@[0-9a-zA-Z]([-_.0-9a-zA-Z])*.([a-zA-Z])*/;
        return reg.test(email);
    };

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
        if (email === '' || password === '') {
            alert('내용을 입력하세요.')
            return;
        }
        if (!emailCheck(email)) {
            alert('이메일 형식이 다릅니다.')
            return;
        }
        dispatch(loginFB(email, password))
        navigate("/")
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
                        value={password}
                        onChange={onChange}
                    />
                </label>
                <JoinBtn onClick={onSubmit} disabled={!(emailCheck(email) && password.length > 7)} type="submit">로그인</JoinBtn>
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
  background-color: ${(props) => props.disabled ? "rgba(27, 156, 252, 0.55)" : "#1B9CFC "};
  color: white;
  border: none;
  cursor: pointer;
  height: 40px;
  border-radius: 6px;
  margin-top: 30px;
`

export default Login