import React from 'react'

import { Grid, Image, Text } from '../elements'

import FaceIcon from '@mui/icons-material/Face'
import GitHubIcon from '@mui/icons-material/GitHub'

const Footer = (props) => {
  const members = [
    { src: 'https://t1.daumcdn.net/cfile/blog/99EFF04B5E01683F30', nickname: 'Jun', blog: 'https://www.linkedin.com/in/seungjunkim0906/', github: 'https://github.com/Seungjun0906' },
    { src: 'https://t1.daumcdn.net/cfile/blog/99EFF04B5E01683F30', nickname: '길재원', blog: 'https://velog.io/@kiljw316', github: 'https://github.com/kiljw316' },
    { src: 'https://t1.daumcdn.net/cfile/blog/99EFF04B5E01683F30', nickname: 'mincho', blog: 'https://luce-sicut-stella.tistory.com/', github: 'https://github.com/mintsid' },
    { src: 'https://t1.daumcdn.net/cfile/blog/99EFF04B5E01683F30', nickname: '213am', blog: 'https://velog.io/@undriedspring', github: 'https://velog.io/@undriedspring' },
    {
      src: 'https://t1.daumcdn.net/cfile/blog/99EFF04B5E01683F30',
      nickname: 'jann_2',
      blog: 'https://jann2codingdiary.tistory.com/manage/posts/',
      github: 'https://jann2codingdiary.tistory.com/manage/posts/',
    },
    { src: 'https://t1.daumcdn.net/cfile/blog/99EFF04B5E01683F30', nickname: 'zubetcha', blog: 'https://zubetcha.tistory.com/', github: 'https://github.com/zubetcha' },
  ]
  return (
    <Grid maxWidth="300px" minWidth="150px" height="450px" padding="10px 0 0 0" margin="0">
      <Grid>
        {members.map((member) => {
          return (
            <Grid is_flex>
              <Grid is_flex margin="5px 15px 5px 10px">
                <Grid is_flex width="auto">
                  <Image src={member.src} shape="circle" size="36"></Image>
                  <Text color="#333" size="14px" margin="0">
                    {member.nickname}
                  </Text>
                </Grid>
                <Grid is_flex width="auto">
                  <FaceIcon
                    style={{ margin: '0 8px', color: '#6e6e6e', cursor: 'pointer' }}
                    onClick={() => {
                      window.open(`${member.blog}`)
                    }}
                  ></FaceIcon>
                  <GitHubIcon
                    style={{ margin: '0 0 0 8px', color: '#6e6e6e', cursor: 'pointer' }}
                    onClick={() => {
                      window.open(`${member.github}`)
                    }}
                  ></GitHubIcon>
                </Grid>
              </Grid>
            </Grid>
          )
        })}
      </Grid>

      <Grid margin="20px 0 0 20px" width="auto">
        <Text color="#6e6e6e" size="10px">
          © 2021 HANGHAELOG FROM TEAM 2
        </Text>
      </Grid>
    </Grid>
  )
}

export default Footer
