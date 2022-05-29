// import React from 'react';
import './App.css';
import backgroundImg from './assets/bg7.jpg';
import styled from 'styled-components';

function App() {
  return (
    <Container>
      <Header>
        <h1 style={{ margin: 0 }}>중국어 단어장</h1>
      </Header>
      <Section>
        <CardContainer>
          <CardItem>
            <div>
              <h4>안녕</h4>
              <p>어쩌구</p>
            </div>
            <div>
            </div>
            <p></p>
            <p></p>
            <p></p>
          </CardItem>
          <CardItem>
          </CardItem>
          <CardItem>
          </CardItem>
        </CardContainer>
      </Section>

    </Container>
  );
}

const CardContainer = styled.div`
  width: 70%;
  display: grid;
  margin: 0 auto;
  column-gap: 20px;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 200px 200px;
`

const Section = styled.section`
  padding-top: 120px;
`

const CardItem = styled.article`
  border: 2px solid gray;
  border-radius: 15px;
`

const Header = styled.header`
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 15px;
  background-color: #DBDBDB;
  top: 0;
  left: 0;
`

const Container = styled.div`
  height: 100vh;
  background-image: url(${backgroundImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position:center;
`

export default App;
