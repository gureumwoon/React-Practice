import { useRef } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import styled from 'styled-components';
import Nav from '../components/Nav'
import { useNavigate } from 'react-router-dom';

function Join() {
    const navigate = useNavigate()

    const idRef = useRef(null);
    const nameRef = useRef(null);
    const pwRef = useRef(null);
    const pw2Ref = useRef(null);

    // const signup = async (event) => {
    //     event.preventDefault();
    //     try {
    //         const user = await createUserWithEmailAndPassword(
    //             auth,
    //             idRef.current.value,
    //             pwRef.current.value,
    //         );
    //         console.log(user)

    //         const user_doc = await addDoc(collection(db, "users"), {
    //             user_id: user.user.email,
    //             name: nameRef.current.value,
    //         });
    //         console.log(user_doc.id)
    //         window.alert(`환영해요! ${nameRef.current.value}님 :)! 로그인도 부탁드려요!`);
    //         navigate("/login")
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    return (
        <section>
            <Nav />
            <FormSection>
                <h1>회원가입</h1>
                <label htmlFor="id">
                    <p>아이디</p>
                    <Input ref={idRef} id="id" type="email" required />
                </label>
                <label htmlFor="nic">
                    <p>닉네임</p>
                    <Input ref={nameRef} id="nic" required />
                </label>
                <label htmlFor="pw">
                    <p>비밀번호</p>
                    <Input ref={pwRef} id="pw" required type="password" />
                </label>
                <label htmlFor="pw2">
                    <p>비밀번호 확인</p>
                    <Input ref={pw2Ref} id="pw2" type="password" required />
                </label>
                <JoinBtn
                // onClick={signup}
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
  background-color: rgba(27, 156, 252, 0.55);
  color: white;
  border: none;
  cursor: pointer;
  height: 40px;
  border-radius: 6px;
  margin-top: 30px;
`

export default Join