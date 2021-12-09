import React from 'react'

import { Grid, Image, Text } from '../elements'

import FaceIcon from '@mui/icons-material/Face'
import GitHubIcon from '@mui/icons-material/GitHub'

const Footer = (props) => {
  const members = [
    { src: 'https://t1.daumcdn.net/cfile/blog/99EFF04B5E01683F30', nickname: 'zubetcha', blog_url: '', github_url: '' },
    { src: 'https://t1.daumcdn.net/cfile/blog/99EFF04B5E01683F30', nickname: 'zubetcha', blog_url: '', github_url: '' },
    { src: 'https://t1.daumcdn.net/cfile/blog/99EFF04B5E01683F30', nickname: 'zubetcha', blog_url: '', github_url: '' },
    { src: 'https://t1.daumcdn.net/cfile/blog/99EFF04B5E01683F30', nickname: 'zubetcha', blog_url: '', github_url: '' },
    { src: 'https://t1.daumcdn.net/cfile/blog/99EFF04B5E01683F30', nickname: 'zubetcha', blog_url: '', github_url: '' },
    { src: 'https://t1.daumcdn.net/cfile/blog/99EFF04B5E01683F30', nickname: 'zubetcha', blog_url: '', github_url: '' },
  ]
  return (
    <Grid maxWidth="300px" minWidth="150px" height="450px" padding="20px 0 0 0" margin="0">
      <Grid>
        {members.map((member) => {
          return (
            <Grid is_flex>
              <Grid is_flex margin="5px 15px 5px 10px">
                <Grid is_flex width="auto">
                  <Image src={member.src} shape="circle" size="36"></Image>
                  <Text size="14px" margin="0">
                    {member.nickname}
                  </Text>
                </Grid>
                <Grid is_flex width="auto">
                  <FaceIcon
                    style={{ margin: '0 8px', color: '#333', cursor: 'pointer' }}
                    onClick={() => {
                      window.location.href = ``
                    }}
                  ></FaceIcon>
                  <GitHubIcon
                    style={{ margin: '0 0 0 8px', color: '#333', cursor: 'pointer' }}
                    onClick={() => {
                      window.location.href = ``
                    }}
                  ></GitHubIcon>
                </Grid>
              </Grid>
            </Grid>
          )
        })}
      </Grid>

      <Grid margin="20px 0 0 20px" width="auto">
        <Text size="10px">© 2021 HANGHAELOG FROM TEAM 2</Text>
      </Grid>
    </Grid>
  )
}

export default Footer
