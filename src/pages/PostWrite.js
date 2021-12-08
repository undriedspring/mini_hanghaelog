import React from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'

import Upload from '../shared/Upload'
import { Grid, Text } from '../elements'
import { actionCreators as postActions } from '../redux/modules/post'
import { actionCreators as imageActions } from '../redux/modules/image'

const PostWrite = (props) => {
  const defaultImage = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqCQrU2ehVPXr5xwc4CBn-uOUjT3dAPOSZSQ&usqp=CAU'

  const dispatch = useDispatch()

  const is_login = useSelector((state) => state.user.is_login)
  const preview = useSelector((state) => state.image.preview)
  // **** post module 완성 후 주석 풀기 **** //
  // const post_list = useSelector((state) => state.post.list)

  const post_id = props.match.params.id
  const is_edit = post_id ? true : false
  // **** post module 완성 후 주석 풀기 **** //
  // const _post = is_edit ? post_list.find((post) => post.id === post_id) : null

  const { history } = props

  const [content, setContent] = React.useState('')

  // **** post module 완성 후 주석 풀기 **** //
  // const [content, setContent] = React.useState(_post ? _post.content : '')

  // **** post module 완성 후 주석 풀기 **** //
  // React.useEffect(() => {
  //   if (is_edit && !_post) {
  //     window.alert('포스트 정보가 없습니다.')
  //     console.log('포스트 정보가 없습니다.')
  //     history.goBack()

  //     return
  //   }

  //   if (is_edit) {
  //     dispatch(imageActions.setPreview(_post.imgUrl))
  //   }
  // }, [])

  const changeContent = (e) => {
    setContent(e.target.value)
  }

  const textCnt = content.length

  const addPost = () => {
    if (preview === null || content === '') {
      window.alert('이미지 업로드와 텍스트 입력을 모두 완료해주세요!')
      return
    } else {
      // **** post module 완성 후 주석 풀기 **** //
      // dispatch(postActions.addPostFB(content))
    }
  }

  const editPost = () => {
    if (preview === null || content === '') {
      window.alert('이미지 업로드와 텍스트 입력을 모두 완료해주세요!')
      return
    } else {
      // **** post module 완성 후 주석 풀기 **** //
      // dispatch(postAction.editPost(post_id, { content: content }))
    }
  }

  // **** 로그인 구현 후 주석 풀기 **** //
  // if (!is_login) {
  //   return (
  //     <Grid maxWidth="400px" margin="auto">
  //       <Grid margin="200px 0px 0px 0px" height="328px" border="2px solid #a496c7">
  //         <Text size="20px" align="center" margin="80px 0 120px 0">
  //           로그인 후 작성하실 수 있습니다.
  //         </Text>
  //         <Btn
  //           style={{ margin: 'auto' }}
  //           onClick={() => {
  //             history.replace('/api/posts')
  //           }}
  //         >
  //           홈으로 이동
  //         </Btn>
  //       </Grid>
  //     </Grid>
  //   )
  // }

  return (
    <React.Fragment>
      <Wrap>
        <Grid>
          <Title>{is_edit ? 'Edit Post' : 'New Post'}</Title>
        </Grid>
        <Grid is_flex>
          <Grid padding="0 0 0 20px" maxWidth="300px" minWidth="150px">
            <Text size="20px" weight="700">
              nickname
            </Text>
            <Upload />
            <Textarea value={content} onChange={changeContent} label="게시글 내용" placeholder="텍스트를 입력해주세요." maxLength="200" required></Textarea>
            {<TextCnt>{textCnt}/ 200</TextCnt>}
            {is_edit ? <Btn onClick={editPost}>수정하기</Btn> : <Btn onClick={addPost}>작성하기</Btn>}
          </Grid>
          <Grid width="100%" maxWidth="450px" minWidth="400px" margin="18px">
            <ImageInner src={preview ? preview : defaultImage}></ImageInner>
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
  margin: 150px auto 0 auto;
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
  padding: 10px;
  box-sizing: border-box;
  border-radius: 4px;

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

const Btn = styled.button`
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

const ImageInner = styled.div`
  position: relative;
  padding-top: 100%;
  overflow: hidden;
  background-image: url('${(props) => props.src}');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`

export default PostWrite
