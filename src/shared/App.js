import React from 'react'
import { Grid } from '../elements'
import QuickMenu from '../components/QuickMenu'
import Comments from '../pages/Comments'

function App() {
  return (
    <>
      <Grid>
        <Comments></Comments>
        <QuickMenu></QuickMenu>
      </Grid>
    </>
  )
}

export default App
