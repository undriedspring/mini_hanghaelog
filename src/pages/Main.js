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
  const user_id = Number(localStorage.getItem('id'))
  const user_nickname = localStorage.getItem('nickname')

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
          {post_list.map((p) => {
            if (p.userId === user_id) {
              return (
                <Grid key={p.id}>
                  <PostLists {...p} is_me />
                </Grid>
              )
            } else {
              return (
                <Grid key={p.id}>
                  <PostLists {...p} />
                </Grid>
              )
            }
          })}
          {user_nickname ? <QuickMenu></QuickMenu> : null}
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

  &::-webkit-scrollbar {
    //스크롤바 전체
    width: 9px;
    height: 10px;
    border-radius: 6px;
    background: rgba(255, 255, 255, 0.4);
  }
  &::-webkit-scrollbar-thumb {
    //스크롤 막대
    background: #a496c7;
    border-radius: 6px;
  }

  /* -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
    width: 0 !important;
  } */
`

export default Main
