import React from 'react'
import { Grid, Button, Input, Text, Image } from '../elements'
import { history } from '../redux/configureStore'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline'
import DeleteIcon from '@mui/icons-material/Delete'
import BorderColorIcon from '@mui/icons-material/BorderColor'
import IconButton from '@mui/material/IconButton'

const PostLists = (props) => {
  return (
    <React.Fragment>
      <Grid maxWidth="700px" minWidth="500px" margin="80px 0px 0px 0px">
        <Grid is_flex>
          <Grid is_flex width="auto">
            <Image shape="circle" />
          </Grid>
          <Grid is_flex margin="0px 8px">
            <Text margin="0px" weight="500" size="18px">
              jawoon
            </Text>
            <Text margin="0px" size="13px" color="#A4A4A4">
              20분 전
            </Text>
          </Grid>
        </Grid>

        <Grid is_flex>
          <Grid padding="8px">
            <Text size="15px">콩이입니다</Text>
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

        <Grid is_flex>
          <Image Image size="700" src="https://kimkong2.s3.ap-northeast-2.amazonaws.com/KakaoTalk_20211129_233615066_02.jpg"></Image>
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

PostLists.defaultProps = {
  user_info: {
    user_name: 'jawoon',
    user_profile: 'https://cdn-icons-png.flaticon.com/512/1864/1864514.png',
  },
  image_url: 'https://kimkong2.s3.ap-northeast-2.amazonaws.com/KakaoTalk_20211129_233615066_02.jpg',
  contents: '김콩',
  comment_cnt: 10,
  insert_dt: '2021-02-27 10:00:00',
}

export default PostLists
