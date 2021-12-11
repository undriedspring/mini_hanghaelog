import React, { useState } from 'react'
import './EachComment.css'
import 'moment'
import 'moment/locale/ko'
import moment from 'moment'

import { history } from '../redux/configureStore'
import styled from 'styled-components'
import SendIcon from '@mui/icons-material/Send'
import { actionCreators as commentActions } from '../redux/modules/comment'
import { Grid, Button, Image, Input, Text } from '../elements'
import { useDispatch, useSelector } from 'react-redux'

const EachComment = (props) => {
  const dispatch = useDispatch()
  const user_id = Number(localStorage.getItem('id'))

  const { post_id } = props
  const day = moment(props.updatedAt).fromNow()

  const deleteComment = () => {
    if (window.confirm('댓글을 삭제하시겠습니까?')) {
      dispatch(commentActions.deleteCommentDB(post_id, props.id))
    } else {
      return
    }
  }

  return (
    <React.Fragment>
      {/* 댓글 */}
      <Grid is_flex border=".5px solid" margin="0 0 5px 0">
        <Grid is_flex padding="15px" width="auto">
          {/* 기본 프로필 이미지 scr 달아주기 */}
          <Image shape="circle" size="30"></Image>
          <Grid margin="0px 5px" width="auto">
            <Text color="#333333" width="auto">
              {props.nickname}
            </Text>
          </Grid>
        </Grid>
        <Grid margin="20px">
          <Text>{props.comment}</Text>
        </Grid>
        <Grid>
          <Text size="13px" align="right">
            {day}
          </Text>
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
          {props.userId === user_id && (
            <button className="CommentDeleteButton" onClick={deleteComment}>
              삭제
            </button>
          )}
        </Grid>
      </Grid>
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
