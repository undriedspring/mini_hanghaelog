import React from 'react'
import './QuickMenu.css'
import Permit from '../shared/Permit'
import { Grid, Button, Image, Input, Text } from '../elements'
import { history } from '../redux/configureStore'
import AddCircleIcon from '@mui/icons-material/AddCircle'
import ArrowDropDownCircleSharpIcon from '@mui/icons-material/ArrowDropDownCircleSharp'

const QuickMenu = () => {
  return (
    <React.Fragment>
      <Grid position="fixed" right="7%" bottom="5%">
        <div className="Rotate">
          <Grid is_grid>
            {/* <Permit> */}
            <ArrowDropDownCircleSharpIcon
              class="TopToButton"
              width="70px"
              cursor="pointer"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
            />
            {/* </Permit> */}
            <AddCircleIcon
              class="AddButton"
              width="70px"
              cursor="pointer"
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
