import React from 'react'
import './QuickMenu.css'
import styled from 'styled-components'
import Permit from '../shared/Permit'
import { Grid, Button, Image, Input, Text } from '../elements'
import { history } from '../redux/configureStore'
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined'
import ArrowDropDownCircleSharpIcon from '@mui/icons-material/ArrowDropDownCircleSharp'

const QuickMenu = () => {

  var location = document.querySelector('#Header')

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
              _onClick={() => {
                window.scrollBy(0, -window.innerHeight)
                //ref로 요소를 잡아오기,scrollTP
              }}
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
