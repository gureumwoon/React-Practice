import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';

const RateSubmitBtn = styled.button`
  border: none;
  width: 80%;
  padding: 20px;
  background-color: purple;
  border-radius: 5px;
  font-size: 15px;
  color: white;
`
const Circle = styled.div`
  width: 30px;
  height: 30px;
  margin: 0 6px;
  border-radius: 30px;
  background-color: ${props => props.color};
`

const LineUp = styled.div`
  display: flex;
  margin: 30px 0;
  justify-content: center;
  align-items: center;
`

const DayBox = styled.span`
  color: white;
  background-color: orange;
  padding: 3px;
  border-radius: 5px;
`



function Day(props) {
    let [range, setRange] = useState([0, 1, 2, 3, 4]);
    let [idx, setIdx] = useState(0);
    let navigate = useNavigate();

    let { id } = useParams()

    return (
        <div>
            <h3>
                <DayBox>{props.day[id]}요일</DayBox> 평점 남기기
            </h3>
            <LineUp>
                {
                    range.map((range, i) => {
                        return (
                            <Circle onClick={() => { setIdx(i) }} style={{ backgroundColor: i <= idx ? 'yellow' : 'rgb(214, 210, 210' }}></Circle>
                        )
                    })
                }
            </LineUp>
            <RateSubmitBtn onClick={() => { navigate('/') }}>평점 남기기</RateSubmitBtn>
        </div>
    )
}

export default Day