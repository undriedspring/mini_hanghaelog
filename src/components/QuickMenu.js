import React from 'react'
import './QuickMenu.css'
import styled from 'styled-components'
import Permit from '../shared/Permit'
import { Grid, Button, Image, Input, Text } from '../elements'
import { history } from '../redux/configureStore'
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined'
import ArrowDropDownCircleSharpIcon from '@mui/icons-material/ArrowDropDownCircleSharp'

const QuickMenu = () => {
  // var location = document.querySelector('#Header').offsetTop

  return (
    <React.Fragment>
      <Grid position="fixed" right="7%" bottom="5%">
        <div className="Rotate">
          <Grid is_grid font-size="5rem">
            {/* <Permit> */}
            <ArrowDropDownCircleSharpIcon
              className="TopToButton"
              fontSize="10rem"
              width="auto"
              height="auto"
              outline="none"
              // onClick={() => {
              //   window.scrollTo({ top: location, behavior: 'smooth' })
              // }}
            />
            {/* </Permit> */}
            <AddCircleOutlinedIcon
              className="AddButton"
              fontSize="10rem"
              width="auto"
              height="auto"
              outline="none"
              onClick={() => {
                history.push('/posts/write')
              }}
            />
          </Grid>
        </div>
      </Grid>
    </React.Fragment>
  )
}

export default QuickMenu
