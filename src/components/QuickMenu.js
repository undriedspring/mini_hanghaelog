import React from 'react'
import './QuickMenu.css'
import { Grid, Button, Image, Input, Text } from '../elements'
import { history } from '../redux/configureStore'
import Comments from '../pages/Comments'
import AddCircleIcon from '@mui/icons-material/AddCircle'
import ArrowDropDownCircleSharpIcon from '@mui/icons-material/ArrowDropDownCircleSharp'

const QuickMenu = () => {
  return (
    <React.Fragment>
      <Grid position="fixed" right="7%" bottom="5%">
        <div className="Rotate">
          <Grid is_grid>
            <ArrowDropDownCircleSharpIcon
              class="TopToButton"
              width="70px"
              cursor="pointer"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
            />
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
