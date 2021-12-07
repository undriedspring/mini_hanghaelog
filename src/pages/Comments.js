import React from 'react'
import { Grid, Button, Image, Input, Text } from '../elements'

const Comments = (props) => {
  return (
    <React.Fragment>
      <Grid min-width="650px" max-width="1000px" top="0" left="0" justify-content="space-around">
        <Grid>
          <Button
            width="100px"
            height="100px"
            border="none"
            bg="none"
            src="url(https://fonts.gstatic.com/s/expletussans/v14/RLpiK5v5_bqufTYdnhFzDj2ddfsgZ60_U1vMJ6ZYmQ.woff2) format('woff2')"
            font-family="Expletus Sans"
          >
            HHL
          </Button>
        </Grid>
        <Grid is_grid>
          <Grid is_flex padding="20px" margin="10px 0px">
            <Image shape="circle" size="30"></Image>
            <Grid margin="0px 5px">
              <Text color="#333333">213am</Text>
            </Grid>
          </Grid>
          <Grid width="100%" margin="0px 0px 20px 0px">
            <Input type="text"></Input>
          </Grid>
          <Grid margin="10px 0 30px 0">
            <Text>댓글 목록입니다</Text>
            <Text>댓글 목록입니다</Text>
            <Text>댓글 목록입니다</Text>
            <Text>댓글 목록입니다</Text>
            <Text>댓글 목록입니다</Text>
            <Text>댓글 목록입니다</Text>
            <Text>댓글 목록입니다</Text>
            <Text>댓글 목록입니다</Text>
            <Text>댓글 목록입니다</Text>
            <Text>댓글 목록입니다</Text>
            <Text>댓글 목록입니다</Text>
            <Text>댓글 목록입니다</Text>
            <Text>댓글 목록입니다</Text>
            <Text>댓글 목록입니다</Text>
            <Text>댓글 목록입니다</Text>
            <Text>댓글 목록입니다</Text>
            <Text>댓글 목록입니다</Text>
            <Text>댓글 목록입니다</Text>
            <Text>댓글 목록입니다</Text>
            <Text>댓글 목록입니다</Text>
            <Text>댓글 목록입니다</Text>
            <Text>댓글 목록입니다</Text>
            <Text>댓글 목록입니다</Text>
            <Text>댓글 목록입니다</Text>
            <Text>댓글 목록입니다</Text>
            <Text>댓글 목록입니다</Text>
            <Text>댓글 목록입니다</Text>
            <Text>댓글 목록입니다</Text>
            <Text>댓글 목록입니다</Text>
            <Text>댓글 목록입니다</Text>
            <Text>댓글 목록입니다</Text>
            <Text>댓글 목록입니다</Text>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

export default Comments
