import React from 'react'
import styled from 'styled-components'

import { Grid, Image } from '../elements'

const PostWrite = () => {
  return (
    <React.Fragment>
      <Grid maxWidth="1000px" minWidth="650px" height="800px" margin="180px auto 0 auto" bg="#FAFAFA">
        <Grid>
          <Title>새로운 게시글 작성하기</Title>
        </Grid>
        <Grid is_flex>
          <Grid maxWidth="300px" minWidth="150px" borderRight="0.5px solid #333">
            <p style={{ padding: '20px 10px', margin: '0' }}>nickname</p>
            <input type="file"></input>
            <Textarea placeholder="텍스트를 입력해주세요." maxLength="200" required></Textarea>
            <p></p>
          </Grid>
          <Grid maxWidth="700px" minWidth="500px">
            <Image shape="rectangle" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqCQrU2ehVPXr5xwc4CBn-uOUjT3dAPOSZSQ&usqp=CAU"></Image>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

const Title = styled.p`
  padding: 30px 0;
  font-size: 1.5rem;
  text-align: center;
  border-bottom: 0.5px solid #333;
`

const Textarea = styled.textarea`
  width: 100%;
  height: 200px;
  padding: 10px;
  box-sizing: border-box;

  border: none;
  resize: none;

  &:focus {
    border: none;
  }
`

export default PostWrite
