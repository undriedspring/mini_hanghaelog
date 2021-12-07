import React from 'react'

import { Grid, Image, Text } from '../elements'

import FaceIcon from '@mui/icons-material/Face'
import BookIcon from '@mui/icons-material/Book'
import GitHubIcon from '@mui/icons-material/GitHub'

const Footer = (props) => {
  const members = [
    { src: '', nickname: '', blog_url: '', github_url: '' },
    { src: '', nickname: '', blog_url: '', github_url: '' },
    { src: '', nickname: '', blog_url: '', github_url: '' },
    { src: '', nickname: '', blog_url: '', github_url: '' },
    { src: '', nickname: '', blog_url: '', github_url: '' },
    { src: '', nickname: '', blog_url: '', github_url: '' },
  ]
  return (
    <Grid is_flex maxWidth="300px" minWidth="150px" height="500px" bg="lightgrey">
      <Grid is_flex margin="5px">
        <Grid is_flex width="auto">
          <Image shape="circle" size="30"></Image>
          <Text>zubetcha</Text>
        </Grid>
        <Grid is_flex width="auto">
          <FaceIcon style={{ margin: '0 7px' }} onClikc={() => {}}></FaceIcon>
          <BookIcon style={{ margin: '0 7px' }} onClikc={() => {}}></BookIcon>
          <GitHubIcon style={{ margin: '0 0 0 7px' }} onClikc={() => {}}></GitHubIcon>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Footer
