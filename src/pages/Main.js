import React from 'react'
import styled from 'styled-components'
import { Grid } from '../elements'
import Footer from '../components/Footer'
import PostLists from '../components/PostLists'
import QuickMenu from '../components/QuickMenu'

const Main = (props) => {
  return (
    <React.Fragment>
      <Container>
        <Grid maxWidth="300px" minWidth="150px">
          <Footer />
        </Grid>
        <Postbox>
          <PostLists></PostLists>
          <PostLists></PostLists>
          <PostLists></PostLists>
          <QuickMenu></QuickMenu>
        </Postbox>
      </Container>
    </React.Fragment>
  )
}

const Container = styled.div`
  max-width: 1000px;
  min-width: 650px;
  width: auto;
  height: calc(100vh - 60px);
  margin: 0 auto;
  overflow-y: hidden;

  display: flex;
`
const Postbox = styled.div`
  max-width: 700px;
  min-width: 500px;
  background-color: #fff;
  overflow-y: scroll;

  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
    width: 0 !important;
  }
`

export default Main
