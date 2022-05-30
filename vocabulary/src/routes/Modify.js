import React from 'react';
import styled from 'styled-components';
import Header from '../modules/Header';

function Modify() {
    return (
        <div>
            <Header />
            <Section>
                <Form>
                    <p>단어 수정하기</p>
                    <div>
                        <label for="word">단어</label>
                        <input id="word" type="text" />
                    </div>
                    <div>
                        <label for="pronounce">발음</label>
                        <input id="pronounce" type="text" />
                    </div>
                    <div>
                        <label for="mean">의미</label>
                        <input id="mean" type="text" />
                    </div>
                    <div>
                        <label for="sentence">예문</label>
                        <input id="sentence" type="text" />
                    </div>
                    <div>
                        <label for="trans">해석</label>
                        <input id="trans" type="text" />
                    </div>
                    <button>수정하기</button>
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