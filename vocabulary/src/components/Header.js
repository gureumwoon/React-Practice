import React from 'react';
import styled from 'styled-components';

function Header() {
    return (
        <Title>
            <h1 style={{ margin: 0 }}>단어장</h1>
        </Title>
    )
}

const Title = styled.header`
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 15px;
  background-color: #C5EBEA;
  top: 0;
  left: 0;
  h1 {
      color:white;
  }
  `

export default Header;