import React, { useEffect, useState } from 'react';
import './App.css';
import styled from 'styled-components';
import backgroundImg from './assets/bg4.jpg';
import { Routes, Route } from 'react-router-dom'
import Main from './routes/Main'
import Add from './routes/Add';
import { loadVocaFB } from "./redux/modules/voca"
import { useDispatch } from 'react-redux';




function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadVocaFB())
  }, [])


  return (
    <Container>

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/add" element={<Add />} />
      </Routes>

    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  background-image: url(${backgroundImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position:center;
`

export default App;
