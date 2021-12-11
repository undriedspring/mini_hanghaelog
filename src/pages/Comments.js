import React, { useState } from 'react'
import './Comments.css'
import EachComment from '../components/EachComment'
import { actionCreators as commentActions } from '../redux/modules/comment'
import styled from 'styled-components'
import SendIcon from '@mui/icons-material/Send'
import { Grid, Button, Image, Input, Text } from '../elements'
import { useDispatch, useSelector } from 'react-redux'
import { CommentOutlined } from '@material-ui/icons'

const Comments = (props) => {
  const dispatch = useDispatch()
  const post_list = useSelector((state) => state.post.list)
  const comment_list = useSelector((state) => state.comment.list)
  const user_info = useSelector((state) => state.user.user)
  const [comment, setComment] = React.useState(comment_list)
  const [_post_list, setPostList] = React.useState(post_list)
  const postId = props.match.params.id

  console.log(_post_list)
  const onChange = (e) => {
    const commentCurrent = e.target.value
    setComment(commentCurrent)
  }

  const write = () => {
    const comments = {
      comment: comment,
    }
    dispatch(commentActions.addCommentDB(comment))
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
                213am
              </Text>
              <Grid margin="-6px 0 0 10px">
                <hr noshade width="140px" align="left"></hr>
              </Grid>
              <Grid min-width="300px" max-width="500px">
                <Text color="#333333" margin="15px 0 0 10px" size="20px">
                  &nbsp;오늘은 글자수 제한을 140자로 했을 때, 얼마나 많은 내용이 담기는 지 알아보겠습니다. 띄어쓰기를 포함해 140자인데 이게 생각보다는 많은 내용이 들어가네요? 이렇게 주저리주저리
                  말해도 고작 100자 정도라니 꽉 채워서 댓글다는 사람에게는 잘해주세요
                </Text>
              </Grid>
              <Grid margin="50px 0 -50px 15px">댓글 0개</Grid>
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
            <SendIcon className="commentSubmit" onClick={write} fontSize="5rem"></SendIcon>
          </Grid>
          <Grid justify-content="center">
            <EachComment />
          </Grid>
        </Grid>
      </Container>
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

export default Comments
