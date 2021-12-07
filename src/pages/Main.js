import React from 'react'
import styled from 'styled-components'
import { Grid } from '../elements'
import Header from '../components/Header'
import Footer from '../components/Footer'
import PostLists from '../components/PostLists'

const Main = () => {
  return (
    <React.Fragment>
      <Container>
        <Grid maxWidth="700px" minWidth="500px" bg="#FFF">
          <PostLists></PostLists>
          <PostLists></PostLists>
          <PostLists></PostLists>
        </Grid>
        <Grid>
          <Footer></Footer>
        </Grid>
      </Container>
    </React.Fragment>
  )
}

const Container = styled.div`
  max-width: 1000px;
  min-width: 650px;
  margin: 0 auto;

  display: flex;
`

export default Main
