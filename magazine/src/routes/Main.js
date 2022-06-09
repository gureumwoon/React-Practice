import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import CreateIcon from '@mui/icons-material/Create';
import Nav from '../components/Nav'
import PostCard from '../components/PostCard';
import { useSelector } from 'react-redux';

function Main(props) {
  const post_list = useSelector((state) => state.post.list)
  const user_info = useSelector((state) => state.user.user);
  const user = useSelector((state) => state.user)
  const navigate = useNavigate();
  return (
    <Section>
      <Nav />
      {
        post_list.map((p, i) => {
          if (p.user_info.user_id === user_info.uid) {
            return (
              <PostCard key={p.id} {...p} is_me="is_me" />
            )
          } else {
            return (
              <PostCard key={p.id} {...p} />
            )
          }
        })
      }
      {user.is_login && <CreateBtn onClick={() => { navigate("/upload") }}>
        <CreateIcon />
      </CreateBtn>}
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