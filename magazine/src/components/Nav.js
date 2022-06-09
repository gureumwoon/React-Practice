import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { auth } from '../shared/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import Button from '@mui/material/Button';
import { apiKey } from '../shared/firebase'
import { useSelector, useDispatch } from 'react-redux';
import { logoutFB } from '../redux/modules/user';

function Nav() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const state = useSelector((state) => state.user)
    const _session_key = `firebase:authUser:${apiKey}:[DEFAULT]`;
    const is_session = sessionStorage.getItem(_session_key) ? true : false;


    const navigate = useNavigate();
    const dispatch = useDispatch();

    return (
        <Header>
            <Link to="/">
                <HomeIcon color="primary" fontSize="large" />
            </Link>
            {state?.is_login && is_session ? (<ProfileSection>
                <div>
                    <ProfileImg />
                    <p>{state.user.name}</p>
                </div>
                <Button variant="contained" onClick={() => {
                    dispatch(logoutFB());
                    navigate("/")
                }} >LogOut</Button>
            </ProfileSection>) : (<div>
                <Button variant="contained" onClick={() => navigate("/join")} >회원가입</Button>
                <Button sx={{ ml: "5px" }} variant="contained" onClick={() => navigate("/login")}>로그인</Button>
            </div>)}
        </Header>
    )
}


const Header = styled.header`
  width: 100%;
  display: flex;
  padding:16px;
  justify-content: space-between;
  align-items: center;
`

const ProfileSection = styled.div`
  display: flex;
  align-items: center;
  div {
      display: flex;
      align-items: center;
      margin-right: 20px;
      p{
          margin-left: 10px;
      }
  }
`

const ProfileImg = styled.img`
  display: inline-block;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color:lightgrey;
`

export default Nav