import React, { useState } from 'react'
import './Comments.css'
import EachComment from '../components/EachComment'
import { actionCreators as commentActions } from '../redux/modules/comment'
import { actionCreators as postActions } from '../redux/modules/post'
import styled from 'styled-components'
import SendIcon from '@mui/icons-material/Send'
import { Grid, Button, Image, Input, Text } from '../elements'
import { useDispatch, useSelector } from 'react-redux'
import { CommentOutlined } from '@material-ui/icons'

const Comments = (props) => {
  const dispatch = useDispatch()
  const post_id = Number(props.match.params.id)

  const comment_list = useSelector((state) => state.comment.list)
  const post_list = useSelector((state) => state.post.list)
  const idx = post_list.findIndex((p) => p.id === post_id)
  const post = post_list[idx]

  const loginUserId = localStorage.getItem('id')
  const loginUserNickname = localStorage.getItem('nickname')

  const is_login = loginUserId && loginUserNickname ? true : false

  const [comment, setComment] = React.useState('')

  React.useEffect(() => {
    dispatch(commentActions.getCommentDB(post_id))
  }, [])

  React.useEffect(() => {
    if (post_list.length === 0) {
      dispatch(postActions.getPostDB())
    }
  }, [])

  console.log(comment_list)
  const onChange = (e) => {
    setComment(e.target.value)
  }

  const write = () => {
    const comments = {
      comment: comment,
    }
    dispatch(commentActions.addCommentDB(post_id, comments))
    setComment('')
  }

  if (!comment_list[post_id] || !post_id || !post) {
    return null
  }

  return (
    <React.Fragment>
      <Container>
        <Grid maxWidth="800px" minWidth="300px">
          <Grid is_flex padding="30px" margin="100px 0 5px 0" width="auto" border="2px solid #a496c7">
            <div className="profileImage">
              <Image shape="circle" size="70" />
            </div>
            <Grid margin="0px 0px 60px 5px">
              <Text color="black" size="30px" margin="15px 0 0 10px">
                {post.nickname}
              </Text>
              <Grid margin="-6px 0 0 10px">
                <hr noshade width="140px" align="left"></hr>
              </Grid>
              <Grid min-width="300px" max-width="500px">
                <Text color="#333333" margin="15px 0 0 10px" size="20px">
                  &nbsp;{post.content}
                </Text>
              </Grid>
              <Grid margin="50px 0 -50px 15px">댓글 {post.numOfComments}개</Grid>
            </Grid>
          </Grid>
          <Grid width="100%" margin="0px 0px 20px 0px" is_flex>
            <input
              className="commentLine"
              type="text"
              placeholder="최대 100자까지 자유롭게 댓글을 남길 수 있습니다 : )"
              maxlength="100"
              onChange={onChange}
              value={comment}
              onSubmit={write}
              is_submit
            />
            {is_login ? (
              <SendIcon className="commentSubmit" onClick={write} fontSize="5rem"></SendIcon>
            ) : (
              <SendIcon
                className="commentSubmit"
                onClick={() => {
                  window.alert('로그인 후 이용 가능합니다!')
                }}
                fontSize="5rem"
              ></SendIcon>
            )}
          </Grid>

          <Grid justify-content="center">
            {comment_list[post_id].map((c) => {
              return <EachComment key={c.id} post_id={post_id} {...c} />
            })}
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  )
}

Comments.defaultProps = {
  post_id: null,
}

const Container = styled.div`
  max-width: 1000px;
  min-width: 650px;
  margin: 0px auto 0px auto;
  display: flex;
  justify-content: space-around;
`

export default Comments
