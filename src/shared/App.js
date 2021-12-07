import React from 'react'
import styled from 'styled-components'

import Post from './Post'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Grid } from '../elements/index'

function App() {
  return (
    <>
      <div>
        <Header />
        <Grid is_flex alignContent="flex-start" position="relative" maxWidth="1000px" minWidth="650px" margin="130px auto">
          <Grid maxWidth="300px" minWidth="150px" height="500px" bg="lightgrey" position="relative" top="120px">
            <Footer />
          </Grid>
          <Grid width="100%" maxWidth="700px" minWidth="500px">
            <Post></Post>
            <Post></Post>
            <Post></Post>
          </Grid>
        </Grid>
      </div>
    </>
  )
}

export default App
