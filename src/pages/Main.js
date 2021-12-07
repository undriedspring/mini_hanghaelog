import React from 'react'
import { Grid } from '../elements'
import Header from '../components/Header'
import Footer from '../components/Footer'
import PostLists from '../components/PostLists'

const Main = () => {
  return (
    <React.Fragment>
      <Grid>
        <Grid is_flex maxWidth="1000px" minWidth="650px" margin="auto">
          <PostLists></PostLists>
          <Footer></Footer>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

export default Main
