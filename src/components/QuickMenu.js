import React from 'react'
import styled from 'styled-components'
import './QuickMenu.css'
import { Grid, Button, Image, Input, Text } from '../elements'
import { history } from '../redux/configureStore'
import Comments from '../pages/Comments'
import AddCircleIcon from '@mui/icons-material/AddCircle'
import ArrowDropDownCircleSharpIcon from '@mui/icons-material/ArrowDropDownCircleSharp'

const QuickMenu = () => {
  return (
    <React.Fragment>
      <Grid is_grid position="fixed" left="1050px" bottom="50px">
        <Grid position="relative"></Grid>
        <AddCircleIcon
          _onClick={() => {
            history.push(`/api/posts/:id/comments`)
          }}
          class="AddButton"
          width="70px"
          cursor="pointer"
        ></AddCircleIcon>
        <div className="Rotate">
          <ArrowDropDownCircleSharpIcon class="TopToButton" width="70px" cursor="pointer"></ArrowDropDownCircleSharpIcon>
        </div>
      </Grid>
    </React.Fragment>
  )
}

export default QuickMenu
