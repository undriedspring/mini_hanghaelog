import React from 'react'
import styled from 'styled-components'
import { Grid, Button, Image, Input, Text } from '../elements'

const QuickMenu = () => {
  return (
    <React.Fragment>
      <Grid is_grid position="fixed" left="1050px" bottom="100px">
        <Button text="+" width="50px" height="50px" border="none" padding="15px" margin="10px 20px" cursor="pointer"></Button>
        <Button text="^" width="50px" height="50px" border="none" padding="15px" margin="10px 20px" cursor="pointer"></Button>
      </Grid>
    </React.Fragment>
  )
}

export default QuickMenu
