import React, { useEffect, useState } from 'react';
import './App.css';
import styled from 'styled-components';
import backgroundImg from './assets/bg4.jpg';
import { Routes, Route } from 'react-router-dom'
import Main from './routes/Main'
import Modify from './routes/Modify';
import { db } from './firebase';
import { collection, getDoc, getDocs, addDoc, updateDoc, doc, deleteDoc } from 'firebase/firestore';



function App() {

  useEffect(async () => {
    console.log(db);

  }, [])

  const [card, setCard] = useState([1, 2, 3, 4, 5, 6]);

  return (
    <Container>

      <Routes>
        <Route path="/" element={<Main card={card} />} />
        <Route path="/modify/:id" element={<Modify card={card} />} />
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
