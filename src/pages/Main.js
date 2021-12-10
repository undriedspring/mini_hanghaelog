import React from 'react'
import styled from 'styled-components'
import { Grid } from '../elements'
import Footer from '../components/Footer'
import PostLists from '../components/PostLists'
import QuickMenu from '../components/QuickMenu'
import { useSelector } from 'react-redux'
import { actionCreators as postActions } from '../redux/modules/post'
import { useDispatch } from 'react-redux'

const Main = (props) => {
  const dispatch = useDispatch()
  const post_list = useSelector((state) => state.post.list)
  console.log(post_list)

  React.useEffect(() => {
    if (post_list.length === 0) {
      dispatch(postActions.getPostDB())
    }
  }, [])
  return (
    <React.Fragment>
      <Container>
        <Grid maxWidth="300px" minWidth="150px">
          <Footer />
        </Grid>
        <Postbox>
          {post_list.map((p, idx) => {
            // console.log(p.data)
            console.log(p)
            return (
              <Grid key={p.id}>
                <PostLists {...p} />
              </Grid>
            )
          })}
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
