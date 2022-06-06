import React from 'react'
import styled from 'styled-components';
import FavoriteIcon from '@mui/icons-material/Favorite';

function PostCard() {
    return (
        <>
            <ProfileSection>
                <div>
                    <ProfileImg />
                    <p>woon</p>
                </div>
                <p>2022-06-04 12:38:11</p>
            </ProfileSection>
            <ContentSection>
                <p></p>
                <img alt="" />
            </ContentSection>
            <FavoriteSection>
                <div>
                    <p>좋아요 5개</p>
                    <p>댓글 4개</p>
                </div>
                <FavoriteIcon />
            </FavoriteSection>
        </>
    )
}

const ProfileSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  margin-top: 15px;
  div {
      display: flex;
      align-items: center;
      p{
          margin-left: 20px;
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

const ContentSection = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  p{
      width: 50%;
      background-color: lightblue;
      text-align: center;
  }
  img {
      min-width: 250px;
      flex-basis: 50%;
      width: 100%;
      height: 100%;
      background-image: url(https://firebasestorage.googleapis.com/v0/b/sparta-megazine.appspot.com/o/images%2FPqCqlfrZ13SGXL1GJJ9BUAtFRxd2_1654313891716?alt=media&token=c1ea00d2-f968-4809-af44-8bd5300e5064);
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      background-color: lightgrey;
  }
`

const FavoriteSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  div {
      display: flex;
      p:first-child {
          margin-right: 16px;
      }
  }
`

export default PostCard