import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faPencil, faX } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom';
import { deleteVoca, deleteVocaFB, completedVocaFB } from '../redux/modules/voca'
function Card() {

    let navigate = useNavigate();

    const dispatch = useDispatch();

    const vocaData = useSelector((state) => state.voca.list);


    return (
        <CardContainer>
            {
                vocaData && vocaData.map((v, i) => {
                    return (
                        <CardItem completed={v.completed} key={i}>
                            <div className='article-header'>
                                <div>
                                    <h4>{vocaData[i].word}</h4>
                                    <p>[어쩌구]</p>
                                </div>
                                <div className='icon-container'>
                                    <button onClick={() => {
                                        dispatch(completedVocaFB(vocaData[i].id))
                                    }}>
                                        <FontAwesomeIcon icon={faCheck} />
                                    </button>
                                    <button onClick={() => { navigate(`/modify/${i}`) }} style={{ marginLeft: "6px" }}>
                                        <FontAwesomeIcon icon={faPencil} />
                                    </button>
                                    <button onClick={() => {
                                        dispatch(deleteVocaFB(vocaData[i].id))
                                    }} style={{ marginLeft: "6px" }}>
                                        <FontAwesomeIcon icon={faX} />
                                    </button>
                                </div>
                            </div>
                            <div className='article-content'>
                                <p>{vocaData[i].meaning}</p>
                                <ContentText>{vocaData[i].sentence}</ContentText>
                                <ContentText>{vocaData[i].trans}</ContentText>
                            </div>
                        </CardItem>
                    )
                })
            }
        </CardContainer>
    )
}


const CardContainer = styled.div`
  width: 100%;
  /* display: flex; */
  display: grid;
  grid-template-columns:repeat(auto-fit, 440px);
  justify-items: center;
  gap: 1rem;
  /* flex-wrap: wrap;
  justify-content:center;
  gap: 1rem; */
`

const CardItem = styled.article`
  width: 440px;
  border: 2px solid #53ad9a;
  border-radius: 15px;
  padding: 15px 15px;
  background-color: ${(props) => props.completed ? "#53ad9a" : "transparent"};
  color: ${(props) => props.completed ? "white" : "black"};
  .article-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    div>h4 {
      font-size: 24px;
      font-weight: bold;
      margin-bottom: 7px;
    }
    div>p {
      font-size: 14px;
    }
  }
`

const ContentText = styled.p`
  margin-top: 5px;
  font-size: 14px;
`

export default Card;