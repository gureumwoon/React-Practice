import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import CreateIcon from '@mui/icons-material/Create';
import Nav from '../components/Nav'
import PostCard from '../components/PostCard';

function Main() {
    const navigate = useNavigate();
    return (
        <Section>
            <Nav />
            <PostCard />
            <CreateBtn onClick={() => { navigate("/upload") }}>
                <CreateIcon />
            </CreateBtn>
        </Section >
    )
}

const Section = styled.section`
  width: 50%;
  height: 100vh;
  margin: 0 auto;
`

const CreateBtn = styled.button`
  position: fixed;
  bottom: 20px;
  right: 30px;
  width: 48px;
  height: 48px;
  border-radius: 24px;
  background-color: #1B9CFC;
  border:none;
  color: white;
`



export default Main