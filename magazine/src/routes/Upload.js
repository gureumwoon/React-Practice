import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import Nav from '../components/Nav'
import { previewImg } from '../redux/modules/image';
import { addpostFB } from '../redux/modules/post';

function Upload() {
    const dispatch = useDispatch();
    const preview = useSelector((state) => state.image.preview)

    const [contents, setContents] = useState('')
    const [layout, setLayout] = useState('right');
    const [imgUrl, setImgUrl] = useState()
    const [imgName, setImgName] = useState("");

    const selectImg = (event) => {
        const reader = new FileReader();
        const {
            target: { files },
        } = event;

        const theFile = files[0]

        reader.readAsDataURL(theFile)
        reader.onloadend = () => {
            setImgUrl(reader.result)
            dispatch(previewImg(reader.result))
        }
        setImgName(theFile.name);
    }

    const isChecked = (e) => {
        if (e.target.checked) {
            setLayout(e.target.value)
        }
    }

    const uploadPost = () => {
        dispatch(addpostFB(contents, layout))
    }


    return (
        <section>
            <Nav />
            <h1 style={{ textAlign: "left" }}>게시글 작성</h1>
            <UploadImgSection>
                <input defaultValue={imgName} placeholder="사진을 선택 해주세요" />
                <button>
                    <label htmlFor="upload-input">파일찾기</label>
                </button>
                <HiddenInput id="upload-input" type="file" accept="img/*" onChange={selectImg} />
            </UploadImgSection>
            <LayOutTxt>레이아웃 고르기</LayOutTxt>
            <div style={{ textAlign: "left", padding: "16px 0" }}>
                <input id="img-right" type="radio" value="right" onChange={isChecked} />
                <label htmlFor="img-right">
                    <strong>오른쪽에 이미지 왼쪽에 텍스트</strong>
                </label>
            </div>
            <ContentSection>
                <p></p>
                <img src={imgUrl ? imgUrl : 'https://user-images.githubusercontent.com/75834421/124501682-fb25fd00-ddfc-11eb-93ec-c0330dff399b.jpg'} alt="" />
            </ContentSection>
            <div style={{ textAlign: "left", padding: "16px 0" }}>
                <input id="img-left" type="radio" value="left" onChange={isChecked} />
                <label htmlFor="img-left">
                    <strong>왼쪽에 이미지 오른쪽에 텍스트</strong>
                </label>
            </div>
            <ContentSection>
                <img src={imgUrl ? imgUrl : 'https://user-images.githubusercontent.com/75834421/124501682-fb25fd00-ddfc-11eb-93ec-c0330dff399b.jpg'} alt="" />
                <p></p>
            </ContentSection>
            <div style={{ marginTop: "25px" }}>
                <TextAreaLabel htmlFor='uploa-txt'>
                    <p>게시물 내용</p>
                </TextAreaLabel>
                <TextArea rows="10" id="upload-txt" placeholder='게시글 작성' onChange={(e) => { setContents(e.target.value) }}></TextArea>
            </div>
            <UploadBtn onClick={uploadPost}>게시글 작성</UploadBtn>
        </section>
    )
}

const UploadImgSection = styled.div`
  display: flex;
  justify-content: space-between;
  input {
      border: 2px solid rgba(27, 156, 252, 0.55);
      min-width: 230px;
      padding: 10px;
      border-radius: 3px;
  }
  button {
      border: none;
      background-color: rgb(27, 156, 252);
      color: white;
      border-radius: 4px;
  }
`

const HiddenInput = styled.input`
  display:none;
`

const LayOutTxt = styled.p`
  font-size: 20px;
  font-weight: bold;
  text-align: left;
  margin: 20px 0;
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
const TextAreaLabel = styled.label`
p{
    font-size: 14px;
    font-weight: 400;
    text-align: left;
    margin: 5px 0;
}
`

const TextArea = styled.textarea`
  border: 2px solid rgb(37, 204, 247);
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 4px;
`

const UploadBtn = styled.button`
  width: 100%;
  background-color: rgba(27, 156, 252, 0.55);
  color: white;
  border: none;
  height: 40px;
  border-radius: 6px;
  margin-bottom: 20px;
`

export default Upload