import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { createVoca, addVocaFB } from "../redux/modules/voca";

function Modify() {

    let navigate = useNavigate();

    const data = useSelector((state) => state.voca);
    const dispatch = useDispatch();

    const wordRef = useRef()
    const meaningRef = useRef()
    const sentenceRef = useRef()
    const transRef = useRef()

    const addVoca = (e) => {
        e.preventDefault()
        const completed = false;
        const word = wordRef.current.value;
        const meaning = meaningRef.current.value;
        const sentence = sentenceRef.current.value;
        const trans = transRef.current.value;
        // dispatch(createVoca({ completed, word, meaning, sentence, trans }));
        dispatch(addVocaFB({ completed, word, meaning, sentence, trans }))
        navigate('/')
    }

    return (
        <div>
            <Header />
            <Section>
                <Form>
                    <p>단어 추가하기</p>
                    <div>
                        <label for="word">단어</label>
                        <input ref={wordRef} id="word" type="text" />
                    </div>
                    <div>
                        <label for="mean">의미</label>
                        <input ref={meaningRef} id="mean" type="text" />
                    </div>
                    <div>
                        <label for="sentence">예문</label>
                        <input ref={sentenceRef} id="sentence" type="text" />
                    </div>
                    <div>
                        <label for="trans">해석</label>
                        <input ref={transRef} id="trans" type="text" />
                    </div>
                    <button type="submit" onClick={addVoca}>추가하기</button>
                </Form>
            </Section>
        </div>
    )
}

const Section = styled.section`
  max-width: 1400px;
  margin: 0 auto;
  padding-top: 120px;
  display: flex;
  justify-content: center;
`

const Form = styled.form`
  position:relative;
  top: 50px;
  /* border: 1px solid red; */
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    font-size: 18px;
    font-weight: 600;
    text-align: center;
    margin-top: 20px;
    margin-bottom: 20px;
    color:rgb(10, 112, 41);
  }
  div{
      width: 100%;
  }
  input {
      width: 100%;
      border: none;
      background: none;
      border-bottom: 2px solid #53ad9a;
      height: 28px;
      padding: 5px 0px;
      font-size: 16px;
      font-weight: bold;
      margin-bottom: 20px;
      &:focus {
          outline: none;
      }
  }
  button {
      width: 200px;
      height: 40px;
      background-color: rgb(10, 112, 41);
      color: white;
      font-size: 16px;
      margin-top: 20px;
      border-radius: 5px;
  }
`

export default Modify;