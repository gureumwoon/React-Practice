import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

let RateCircle = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 30px;
`
let TriangleBtn = styled.div`
    width: 0;
    height: 0;
    border-top: 1rem solid transparent;
    border-bottom: 1rem solid transparent;
    border-left: 1.6rem solid plum;
`
let ResetBtn = styled.button`
  width: 8rem;
  background-color: dodgerblue;
  color: white;
  font-size: 20px;
  border-radius: 6px;
  padding: 15px;
  border: none;
  margin-top: 20px;
`
let AverageText = styled.p`
  font-size: 25px;
  color: blue;
  font-weight: bold;
  margin: 0;
`

function Main(props) {
    let [rate, setRate] = useState([1, 2, 3, 4, 5]);
    let navigate = useNavigate();
    let rate_sum = 0;

    const week_rates = props.day.map((d, i) => {
        const randomRate = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
        const num = randomRate(1, 5);

        rate_sum += num;

        return {
            week: d,
            rate: num,
        };
    });

    const rate_avg = (rate_sum / week_rates.length).toFixed(1)
    const [avg, setAvg] = useState(rate_avg);


    return (
        <div>
            <h3>내 일주일은?</h3>
            <ul>
                {
                    week_rates.map(function (d, i) {

                        return (
                            <li>
                                <p>{d.week}</p>
                                {
                                    rate.map((r, i) => {
                                        return (
                                            <RateCircle style={{ backgroundColor: i <= d.rate ? 'yellow' : 'rgb(214, 210, 210)' }} />
                                        )
                                    })
                                }
                                <TriangleBtn onClick={() => { navigate(`/day/${i}`) }}></TriangleBtn>
                            </li>
                        )
                    })
                }
            </ul>
            <div>
                <AverageText>평균 평점</AverageText>
                <AverageText>
                    {avg}
                </AverageText>
            </div>
            <ResetBtn onClick={() => { setAvg(0) }}>Reset</ResetBtn>
        </div>
    )
}

export default Main