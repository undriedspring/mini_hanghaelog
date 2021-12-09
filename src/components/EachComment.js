import React, { useState } from 'react'
import './EachComment.css'
import { history } from '../redux/configureStore'
import styled from 'styled-components'
import SendIcon from '@mui/icons-material/Send'
import { actionCreators as commentActions } from '../redux/modules/comment'
import { Grid, Button, Image, Input, Text } from '../elements'
import { useDispatch, useSelector } from 'react-redux'

const EachComment = (props) => {
  const dispatch = useDispatch()
  const { comment, commentsId, userId, postId } = props
  const post_list = useSelector((state) => state.POSTS)
  const comment_list = useSelector((state) => state.COMMENTS)
  // const user_id = useSelector((state) => state.COMMENTS.userId)
  const is_click = onclick ? true : false

  return (
    <React.Fragment>
      {/* 댓글 */}
      <Grid is_flex border=".5px solid" margin="0 0 5px 0">
        <Grid is_flex padding="15px" width="auto">
          <Image shape="circle" size="30"></Image>
          <Grid margin="0px 5px" width="auto">
            <Text color="#333333" width="auto">
              213am
            </Text>
          </Grid>
        </Grid>
        <Grid margin="20px">
          {/* 공백포함 180자 */}
          <Text>그럼 한 줄에 담기는 글자수는 몇 자 일까요? 이정도 쓸 수 있으면 충분하겠네요</Text>
        </Grid>
        <Grid is_flex width="auto" margin="30px">
          {/* <button
            className="CommentEditButton"
            _onClick={() => {
              history.push(`/posts/${props.id}/edit`)
            }}
          >
            수정
          </button> */}
          {/* {props.is_me && ( */}
          <button
            className="CommentDeleteButton"
            _onClick={() => {
              dispatch(commentActions.deleteComment({}))
            }}
          >
            삭제
          </button>
          {/* )} */}
        </Grid>
      </Grid>
      {/* 댓글 */}
    </React.Fragment>
  )
}

const Container = styled.div`
  max-width: 1000px;
  min-width: 650px;
  margin: 0px auto 0px auto;
  display: flex;
  justify-content: space-around;
`

export default EachComment

const CommentItem = (props) => {
  const { comment, commentsId, userId, postId } = props
  return (
    <Grid is_flex border=".5px solid" margin="0 0 5px 0">
      <Grid is_flex padding="15px">
        <Image shape="circle" size="30"></Image>
        <Grid margin="0px 5px">
          <Text color="#333333" width="auto" bold>
            {userId}
          </Text>
        </Grid>
      </Grid>
      <Grid>
        <Text>{comment}</Text>
      </Grid>
    </Grid>
  )
}
