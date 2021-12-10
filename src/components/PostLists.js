import React, { useState } from 'react'
import styled from 'styled-components'
import { Grid, Button, Input, Text, Image } from '../elements'
import { history } from '../redux/configureStore'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline'
import DeleteIcon from '@mui/icons-material/Delete'
import BorderColorIcon from '@mui/icons-material/BorderColor'
import IconButton from '@mui/material/IconButton'
import ClearRoundedIcon from '@mui/icons-material/ClearRounded'

import TimeAgo from '../shared/TimeAgo'

const PostLists = (props) => {

  console.log(props.imgUrl)
  console.log(typeof props)

  const defaultImage = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqCQrU2ehVPXr5xwc4CBn-uOUjT3dAPOSZSQ&usqp=CAU'

  const [showModal, setShowModal] = useState(false)

  const openModal = () => {
    setShowModal(true)
  }

  const closeModal = () => {
    setShowModal(false)
  }

  window.addEventListener('keyup', (e) => {
    if (setShowModal(false) && e.key === 'Escape') {
      setShowModal(true)
    }
  })

  return (
    <React.Fragment>
      {showModal ? (
        <Background onClick={closeModal}>
          <Container onClick={(e) => e.stopPropagation()}>
            <Bar>
              <ClearRoundedIcon onClick={closeModal}></ClearRoundedIcon>
            </Bar>
            <Modal src={props.imgUrl ? props.imgUrl : defaultImage}></Modal>
          </Container>
        </Background>
      ) : null}
      <Grid maxWidth="700px" minWidth="500px" margin="10px 0px 60px 0px">
        <Grid is_flex>
          <Grid is_flex width="auto">
            <Image shape="circle" />
          </Grid>
          <Grid is_flex margin="0px 8px">
            <Text margin="0px" weight="500" size="18px">
              {props.nickname}
            </Text>
            <Text margin="0px" size="13px" color="#A4A4A4">
              {props.updatedAt}
            </Text>
          </Grid>
        </Grid>

        <Grid is_flex>
          <Grid padding="8px">
            <Text size="15px">{props.content}</Text>
          </Grid>
          <IconButton>
            <BorderColorIcon
              onClick={() => {
                history.push('/posts/:id/edit')
              }}
            ></BorderColorIcon>
          </IconButton>
          <IconButton>
            <DeleteIcon></DeleteIcon>
          </IconButton>
        </Grid>

        <Grid is_flex _onClick={openModal}>
          <Image Image size="700" src={props.imgUrl}></Image>
        </Grid>

        <Grid is_flex>
          <Grid is_flex width="auto">
            {/* <Grid is_flex>
              <Grid is_flex width="auto">
                <FavoriteBorderIcon></FavoriteBorderIcon>
              </Grid>
              <Grid is_flex margin="0px 4px">
                <Text margin="0px" size="14px">
                  10
                </Text>
              </Grid>
            </Grid> */}
          </Grid>
          <Grid is_flex margin="0px">
            <Grid is_flex>
              <Grid is_flex width="auto" margin="0px 4px">
                <IconButton>
                  <ChatBubbleOutlineIcon
                    onClick={() => {
                      history.push('/posts/:id/comments')
                    }}
                  ></ChatBubbleOutlineIcon>
                </IconButton>
              </Grid>
              <Grid is_flex>
                <Text margin="0px" size="13px">
                  댓글 10개
                </Text>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

// PostLists.defaultProps = {
//   user_info: {
//     user_name: 'jawoon',
//     user_profile: 'https://cdn-icons-png.flaticon.com/512/1864/1864514.png',
//   },
//   image_url: 'https://kimkong2.s3.ap-northeast-2.amazonaws.com/KakaoTalk_20211129_233615066_02.jpg',
//   contents: '김콩',
//   comment_cnt: 10,
//   insert_dt: '2021-02-27 10:00:00',
// }

const Background = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 4;
`

const Container = styled.div`
  width: 800px;
  height: 840px;

  border-radius: 20px;

  position: fixed;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -40%);
`

const Bar = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  width: 100%;
  height: 40px;
  background-color: #fff;

  border-top-left-radius: 20px;
  border-top-right-radius: 20px;

  svg {
    margin: 0 15px;
    font-size: 2rem;
    color: #6e6e6e;
    cursor: pointer;
    transition-property: background-color;
    transition-duration: 0.3s;
    transition-timing-function: linear;
    transition: all 0.3s ease 0s;

    &:hover {
      color: #a496c7;
      transform: background-color;
      transition: transform 500ms;
    }
  }
`

const Modal = styled.div`
  width: 100%;
  padding-top: 100%;

  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  background-image: url('${(props) => props.src}');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`

export default PostLists
