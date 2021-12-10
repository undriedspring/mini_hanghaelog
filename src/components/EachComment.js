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
  const { comments, commentsId, userId, postId } = props
  const post_list = useSelector((state) => state.posts.list)
  const comment_list = useSelector((state) => state.comments.list)
  // const user_id = useSelector((state) => state.COMMENTS.userId)
  // const is_click = onclick ? true : false
  // const

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
          {post_list.map((p, idx) => {
            // 옵셔널 체이닝: 유저가 null 일때를 위하여
            if (p.postId === comments.post.userId) {
              return <Text key={p.postId} {...p} is_me />
            } else {
              return <Text key={p.postId} {...p} />
            }
          })}
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
