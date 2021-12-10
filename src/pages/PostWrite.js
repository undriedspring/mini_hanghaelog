import React, { useState } from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'

import { Grid, Text } from '../elements'
import { actionCreators as postActions } from '../redux/modules/post'
import { actionCreators as imageActions } from '../redux/modules/image'

const PostWrite = (props) => {
  const defaultImage = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqCQrU2ehVPXr5xwc4CBn-uOUjT3dAPOSZSQ&usqp=CAU'

  const dispatch = useDispatch()

  const is_login = useSelector((state) => state.user.is_login)
  const preview = useSelector((state) => state.image.preview)
  const post_list = useSelector((state) => state.post.list)

  const post_id = props.match.params.id
  const is_edit = post_id ? true : false
  const _post = is_edit ? post_list.find((post) => post.postId === post_id) : null

  const { history } = props

  const [content, setContent] = React.useState(_post ? _post.content : '')

  const is_uploading = useSelector((state) => state.image.uploading)
  const fileInput = React.useRef()

  const [filename, setFilename] = React.useState('')

  const selectFile = async (e) => {
    const reader = new FileReader()
    // 이미지 업로드 POST api request 파라미터에 넣을 데이터
    const file = fileInput.current.files[0]
    console.log(file)

    reader.readAsDataURL(file)
    reader.onloadend = () => {
      console.log(reader.result)
      dispatch(imageActions.setPreview(reader.result))
    }

    setFilename(e.target.value)
  }

  React.useEffect(() => {
    if (is_edit && !_post) {
      window.alert('포스트 정보가 없습니다.')
      console.log('포스트 정보가 없습니다.')
      history.goBack()

      return
    }

    if (is_edit) {
      dispatch(imageActions.setPreview(_post.imgUrl))
    }
  }, [])

  const changeContent = (e) => {
    setContent(e.target.value)
  }

  const textCnt = content.length

  const addPost = () => {
    if (preview === null || content === '') {
      window.alert('이미지 업로드와 텍스트 입력을 모두 완료해주세요!')
      return
    } else {
      dispatch(postActions.addPostDB(content))
    }
  }

  console.log(content)

  const editPost = () => {
    if (preview === null || content === '') {
      window.alert('이미지 업로드와 텍스트 입력을 모두 완료해주세요!')
      return
    } else {
      dispatch(postActions.editPostDB(post_id, content))
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
            <form name="post_info" encType="multipart/form-data">
              <Grid>
                <Label className="input-file-button" htmlFor="img">
                  업로드
                </Label>
                <UploadName value={filename} placeholder="첨부파일"></UploadName>
                <input name="img" type="file" accept="image/*" id="img" style={{ display: 'none' }} onChange={selectFile} ref={fileInput}></input>
              </Grid>
              <Textarea name="content" value={content} onChange={changeContent} label="게시글 내용" placeholder="텍스트를 입력해주세요." maxLength="200" required></Textarea>
              <Grid is_flex width="auto">
                <Grid></Grid>
                {<TextCnt>{textCnt} / 200</TextCnt>}
              </Grid>
              {is_edit ? <Btn onClick={editPost}>수정하기</Btn> : <Btn onClick={addPost}>작성하기</Btn>}
            </form>
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

const Label = styled.label`
  width: 100px;
  height: 25px;
  padding: 6px 25px;
  margin-right: 10px;
  background-color: #a496c7;
  border-radius: 4px;
  color: whitesmoke;
  font-size: 12px;
  cursor: pointer;
  box-sizing: border-box;
`

const UploadName = styled.input`
  display: inline-block;
  width: 69%;
  height: 27px;
  padding: 0 10px;
  vertical-align: middle;
  border: 1px solid #dddddd;
  border-radius: 4px;
  font-size: 12px;
  color: #999999;
  box-sizing: border-box;
  background-color: rgb(247, 247, 247);

  &:focus {
    outline: none;
  }
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
  width: 60px;
  display: inline-block;
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
  background-color: #6e6e6e;
  color: #fdfdfd;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  margin: 20px auto 0 auto;
  /* 추가 */
  text-transform: uppercase;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  /* 추가 */
  will-change: transform;
  transition: transform 450ms;
  transition-property: background-color;
  transition-duration: 0.3s;
  transition-timing-function: linear;
  &:hover {
    background-color: #a496c7;
    box-shadow: 0px 15px 20px rgba(161, 150, 199, 0.4);
    color: #fff;
    transform: translateY(-3px);
    transition: transform 500ms;
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
