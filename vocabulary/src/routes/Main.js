import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faPencil, faX } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom';
import Header from '../modules/Header';

function Main(props) {
    let navigate = useNavigate();
    return (
        <div>
            <Header />
            <Section>
                <CardContainer>
                    {
                        props.card.map((c, i) => {
                            return (
                                <CardItem>
                                    <div className='article-header'>
                                        <div>
                                            <h4>안녕</h4>
                                            <p>[어쩌구]</p>
                                        </div>
                                        <div className='icon-container'>
                                            <button>
                                                <FontAwesomeIcon icon={faCheck} />
                                            </button>
                                            <button onClick={() => { navigate(`/modify/${i}`) }} style={{ marginLeft: "6px" }}>
                                                <FontAwesomeIcon icon={faPencil} />
                                            </button>
                                            <button style={{ marginLeft: "6px" }}>
                                                <FontAwesomeIcon icon={faX} />
                                            </button>
                                        </div>
                                    </div>
                                    <div className='article-content'>
                                        <p>드디어, 결국</p>
                                        <ContentText>하하하ㅏ하하하ㅏ하ㅏ하하하</ContentText>
                                        <ContentText>비록 이 책은 낙장이 있으나 필경 진귀한 책이다</ContentText>
                                    </div>
                                </CardItem>
                            )
                        })
                    }
                </CardContainer>
            </Section>
        </div>
    )
}

const CardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content:center;
  gap: 1rem;
`

const Section = styled.section`
  max-width: 1400px;
  margin: 0 auto;
  padding-top: 120px;
`

const CardItem = styled.article`
  width: 400px;
  border: 2px solid #53ad9a;
  border-radius: 15px;
  padding: 15px 15px;
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



export default Main;