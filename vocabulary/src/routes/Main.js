import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Card from '../components/Card';
import Header from '../components/Header';


function Main() {

  let navigate = useNavigate();

  return (
    <div>
      <Header />
      <Section>
        <Card />
        <AddBtn onClick={() => { navigate('/add') }}>+</AddBtn>
      </Section>
    </div>
  )
}

const Section = styled.section`
  position: relative;
  height: 100vh;
  max-width: 1400px;
  margin: 0 auto;
  padding-top: 120px;
`

const AddBtn = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 70px;
  height: 70px;
  border-radius: 35px;
  background-color: #53ad9a;
  font-size: 40px;
  font-weight: bold;
  color: white;
`

export default Main;