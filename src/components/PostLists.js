import React from 'react'
import { Grid, Button, Input, Text, Image } from '../elements'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline'
import DeleteIcon from '@mui/icons-material/Delete'
import BorderColorIcon from '@mui/icons-material/BorderColor'

const PostLists = (props) => {
  return (
    <React.Fragment>
      <Grid maxWidth="700px" minWidth="500px" margin="auto">
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
          <Grid>
            <Text size="15px">콩이입니다</Text>
          </Grid>
          <BorderColorIcon></BorderColorIcon>
          <DeleteIcon></DeleteIcon>
        </Grid>

        <Grid is_flex>
          <Image Image size="700" src="https://kimkong2.s3.ap-northeast-2.amazonaws.com/KakaoTalk_20211129_233615066_02.jpg"></Image>
        </Grid>

        <Grid is_flex>
          <Grid is_flex width="auto">
            <Grid is_flex>
              <Grid is_flex width="auto">
                <FavoriteBorderIcon></FavoriteBorderIcon>
              </Grid>
              <Grid is_flex margin="0px 4px">
                <Text margin="0px" size="14px">
                  10
                </Text>
              </Grid>
            </Grid>
          </Grid>
          <Grid is_flex margin="0px 8px">
            <Grid is_flex>
              <Grid is_flex width="auto" margin="0px 4px">
                <ChatBubbleOutlineIcon></ChatBubbleOutlineIcon>
              </Grid>
              <Grid is_flex>
                <Text margin="0px" size="14px">
                  10
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