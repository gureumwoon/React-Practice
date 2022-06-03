import styled from 'styled-components';
import Header from '../components/Header';
import { useNavigate, useParams } from 'react-router-dom';
import { useRef } from 'react';
import { useDispatch } from "react-redux";
import { modifyVocaFB } from "../redux/modules/voca";

function Modify(props) {
    let { id } = useParams()
    let vocaId = props.vocaData.find((v) => v.id === id)
    // let [inputTrans, setInputTrans] = useState(vocaId.trans);


    let navigate = useNavigate();
    const dispatch = useDispatch();

    const wordRef = useRef(null)
    const meaningRef = useRef(null)
    const sentenceRef = useRef(null)
    const transRef = useRef(null)

    // const onInputChange = (event) => {
    //     const {
    //         target: { value },
    //     } = event;
    //     setInputTrans(value)
    // }

    const modifyVoca = (e) => {
        e.preventDefault();
        const word = wordRef.current.value;
        const meaning = meaningRef.current.value;
        const sentence = sentenceRef.current.value;
        const trans = transRef.current.value;
        // dispatch(createVoca({ completed, word, meaning, sentence, trans }));
        dispatch(modifyVocaFB({ word, meaning, sentence, trans }, id))
        navigate('/')
    }

    return (
        <div>
            <Header />
            <Section>
                <Form onSubmit={modifyVoca}>
                    <p>단어 수정하기</p>
                    <div>
                        <label htmlFor="word">단어</label>
                        <input defaultValue={vocaId.word} ref={wordRef} id="word" type="text" />
                    </div>
                    <div>
                        <label htmlFor="mean">의미</label>
                        <input defaultValue={vocaId.meaning} ref={meaningRef} id="mean" type="text" />
                    </div>
                    <div>
                        <label htmlFor="sentence">예문</label>
                        <input defaultValue={vocaId.sentence} ref={sentenceRef} id="sentence" type="text" />
                    </div>
                    <div>
                        <label htmlFor="trans">해석</label>
                        <input defaultValue={vocaId.trans} ref={transRef} id="trans" type="text" />
                    </div>
                    <button onClick={modifyVoca} type="submit" >수정</button>
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