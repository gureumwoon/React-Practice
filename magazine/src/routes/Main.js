import React from 'react'
import styled from 'styled-components';
import HomeIcon from '@mui/icons-material/Home';
import Button from '@mui/material/Button';


function Main() {
    return (
        <Section>
            <Header>
                <a href="">
                    <HomeIcon color="primary" fontSize="large" />
                </a>
                <div>
                    <Button variant="contained">회원가입</Button>
                    <Button sx={{ ml: "5px" }} variant="contained">로그인</Button>
                </div>
            </Header>
        </Section >
    )
}

const Section = styled.section`
  width: 50%;
  height: 100vh;
  margin: 0 auto;
`

const Header = styled.header`
  width: 100%;
  display: flex;
  padding:16px;
  justify-content: space-between;
`

export default Main