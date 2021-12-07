import React from 'react'
import styled from 'styled-components'
import { Grid, Button, Image, Input, Text } from '../elements'
import AddCircleIcon from '@mui/icons-material/AddCircle'
import ArrowDropDownCircleSharpIcon from '@mui/icons-material/ArrowDropDownCircleSharp'

const QuickMenu = () => {
  return (
    <React.Fragment>
      <Grid is_grid position="fixed" left="1000px" bottom="100px">
        <AddCircleIcon class="AddButton" width="70px" cursor="pointer"></AddCircleIcon>
        <ArrowDropDownCircleSharpIcon class="TopToButton" width="70px" cursor="pointer" transform="scaleY(-1)"></ArrowDropDownCircleSharpIcon>
      </Grid>
    </React.Fragment>
  )
}

export default QuickMenu
