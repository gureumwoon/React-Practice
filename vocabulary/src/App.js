// import React from 'react';
import './App.css';
import backgroundImg from './assets/bg2.jpg';
import styled from 'styled-components';

function App() {
  return (
    <div className="App">
      <Header>
        <h1 style={{ margin: 0 }}>중국어 단어장</h1>
      </Header>
      <Section>
        <CardContainer>
          <CardItem>
          </CardItem>
          <CardItem>
          </CardItem>
          <CardItem>
          </CardItem>
        </CardContainer>
      </Section>

    </div>
  );
}

const CardContainer = styled.div`
  width: 70%;
  display: grid;
  margin: 0px auto;
  column-gap: 20px;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 200px 200px;
`

const CardItem = styled.article`
  border: 1px solid gray;
  border-radius: 15px;
`

const Header = styled.header`
  width: 100%;
  height: 50px;
  background-color: #F3EAE1;
  top: 0;
`

const Section = styled.section`
  height: 100vh;
  background-image: url(${backgroundImg});
  background-repeat: no-repeat;
  background-size: cover;
  padding: 50px 0;
`

export default App;
