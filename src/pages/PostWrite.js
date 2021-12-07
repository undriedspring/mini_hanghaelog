import React from 'react'
import styled from 'styled-components'

import Upload from '../shared/Upload'
import { Grid, Text } from '../elements'

const PostWrite = () => {
  return (
    <React.Fragment>
      <Wrap>
        <Grid>
          <Title>New Post</Title>
        </Grid>
        <Grid is_flex>
          <Grid padding="0 0 0 20px" maxWidth="300px" minWidth="150px">
            <Text size="20px" weight="700">
              nickname
            </Text>
            <Upload />
            <Textarea placeholder="텍스트를 입력해주세요." maxLength="200" required></Textarea>
            <TextCnt>0 / 200</TextCnt>
            <SubmitBtn>작성하기</SubmitBtn>
          </Grid>
          <Grid width="100%" maxWidth="450px" minWidth="400px" margin="18px">
            <Image></Image>
          </Grid>
        </Grid>
      </Wrap>
    </React.Fragment>
  )
}

const Wrap = styled.div`
  max-width: 800px;
  min-width: 600px;
  max-height: 600px;
  min-height: 400px;
  margin: 200px auto 0 auto;
  border: 2px solid #a496c7;
`

const Title = styled.p`
  /* padding: 30px 0; */
  font-size: 36px;
  font-weight: 700;
  text-align: center;
`

const Textarea = styled.textarea`
  width: 100%;
  min-width: 250px;
  height: 200px;
  max-height: 200px;
  min-height: 150px;
  margin: 20px 0 0 0;
  box-sizing: border-box;

  border: none;
  resize: none;

  &:focus {
    outline: none;
    border: none;
  }
`

const TextCnt = styled.p`
  font-size: 12px;
  color: #9f9f9f;
  text-align: right;
  margin: 5px 0;

  &:hover {
    color: #333;
  }
`

const SubmitBtn = styled.button`
  display: block;
  width: 120px;
  height: 40px;
  box-sizing: border-box;
  border: none;
  border-radius: 20px;
  outline: none;
  background-color: #333;
  color: #fdfdfd;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  margin: 20px auto 0 auto;

  will-change: transform;
  transition: transform 450ms;
  &:hover {
    background-color: #a496c7;
    transition: transform 500ms;
    transform: translateY(-3px);
  }
`

const Image = styled.div`
  position: relative;
  padding-top: 100%;
  overflow: hidden;
  background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqCQrU2ehVPXr5xwc4CBn-uOUjT3dAPOSZSQ&usqp=CAU');
  background-size: cover;
`

export default PostWrite
