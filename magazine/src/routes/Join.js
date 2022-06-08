import { useState } from 'react';
import { useDispatch } from 'react-redux'
import styled from 'styled-components';
import Nav from '../components/Nav'
import { useNavigate } from 'react-router-dom';
import { signupFB } from '../redux/modules/user';

function Join() {
    const navigate = useNavigate()
    const dispatch = useDispatch();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const [name, setName] = useState('');


    const emailCheck = (email) => {
        let reg = /^[0-9a-zA-Z]([-_.0-9a-zA-Z])*@[0-9a-zA-Z]([-_.0-9a-zA-Z])*.([a-zA-Z])*/;
        return reg.test(email);
    };

    const signup = () => {
        if (email === '' || password === '' || name === '') {
            alert('내용을 입력하세요')
            return;
        }
        if (!emailCheck(email)) {
            alert('이메일을 형식에 맞게 작성해주세요.')
            return;
        }
        if (password !== password2) {
            alert('비밀번호가 일치하지 않습니다.')
            return;
        }
        dispatch(signupFB(email, password, name))
        window.alert(`환영해요! ${name}님 :)! 로그인도 부탁드려요!`);
        navigate("/login")
    }

    return (
        <section>
            <Nav />
            <FormSection>
                <h1>회원가입</h1>
                <label htmlFor="id">
                    <p>아이디</p>
                    <Input id="id" type="email" required onChange={(e) => { setEmail(e.target.value) }} />
                </label>
                <label htmlFor="nic">
                    <p>닉네임</p>
                    <Input id="nic" required onChange={(e) => { setName(e.target.value) }} />
                </label>
                <label htmlFor="pw">
                    <p>비밀번호</p>
                    <Input id="pw" required type="password" onChange={(e) => { setPassword(e.target.value) }} />
                </label>
                <label htmlFor="pw2">
                    <p>비밀번호 확인</p>
                    <Input id="pw2" type="password" required onChange={(e) => { setPassword2(e.target.value) }} />
                </label>
                <JoinBtn
                    onClick={signup}
                    disabled={!(emailCheck(email) && name.length > 7 && password.length > 7 && password2.length > 7)}
                >회원가입</JoinBtn>
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
  background-color:${(props) => props.disabled ? "rgba(27, 156, 252, 0.55)" : "#1B9CFC "};
  color: white;
  border: none;
  cursor: pointer;
  height: 40px;
  border-radius: 6px;
  margin-top: 30px;
`

export default Join