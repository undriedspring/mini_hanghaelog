import React from 'react'
import './Comments.css'
import styled from 'styled-components'
import { Grid, Button, Image, Input, Text } from '../elements'

const Comments = (props) => {
  return (
    <React.Fragment>
      <Container>
        <Grid maxWidth="800px" minWidth="300px">
          <Grid is_flex padding="30px" margin="100px 0 5px 0" width="auto" border=".5px solid #FFA07A">
            <div className="profileImage">
              <Image shape="circle" size="70"></Image>
            </div>
            <Grid margin="0px 0px 0px 10px">
              <Text color="black" size="20px" margin="15px 0 0 10px">
                213am
              </Text>
              <Grid min-width="300px" max-width="500px">
                <Text color="#333333">Axios요..? 저희 이럴거면 왜 firebase랑 친해지게 만드셨어요...</Text>
              </Grid>
            </Grid>
            <Grid></Grid>
          </Grid>
          <Grid width="100%" margin="0px 0px 20px 0px" is_flex>
            <input className="commentLine" type="text" placeholder="댓글을 남겨보세요" />
            <Button width="100px" height="30px" margin="0 0 0 20px" text="댓글 작성" align="center" />
          </Grid>
          <Grid justify-content="center">
            {/* 댓글 */}
            <Grid is_flex border=".5px solid" margin="0 0 5px 0">
              <Grid is_flex padding="15px">
                <Image shape="circle" size="30"></Image>
                <Grid margin="0px 5px">
                  <Text color="#333333" width="auto">
                    213am
                  </Text>
                </Grid>
              </Grid>
              <Grid>
                <Text>댓글 목록입니다</Text>
              </Grid>
            </Grid>
            {/* 댓글 */}
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  )
}

const Container = styled.div`
  max-width: 1000px;
  min-width: 650px;
  margin: 120px auto 0 auto;
  display: flex;
  justify-content: center;
`

export default Comments
