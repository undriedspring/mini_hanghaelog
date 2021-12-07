import React from 'react'
import './App.css'
import { Route } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'
import { useDispatch } from 'react-redux'
import { history } from '../redux/configureStore'
import { Grid } from '../elements'
import Header from '../components/Header'
import Footer from '../components/Footer'
import QuickMenu from '../components/QuickMenu'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Comments from '../pages/Comments'
<<<<<<< HEAD
import PostLists from '../pages/PostLists'
import Resister from '../pages/Register'
=======
import Main from '../pages/Main'
import PostWrite from '../pages/PostWrite'
>>>>>>> 4b0b7496de18deb407cb1927881b64f66b8a91fd

function App() {
  return (
    <>
<<<<<<< HEAD
      <Resister></Resister>
=======
      <Grid>
        <Header></Header>
        <ConnectedRouter history={history}>
          <Route path="/api/posts" exact component={Main}></Route>
          <Route path="/auth/login" exact component={Login}></Route>
          <Route path="/auth/register" exact component={Register}></Route>
          <Route path="/api/posts/write" exact component={PostWrite}></Route>
          <Route path="/api/posts/:id/edit" exact component={PostWrite}></Route>
          <Route path="/api/posts/:id/comments" exact component={Comments}></Route>
        </ConnectedRouter>
        <QuickMenu></QuickMenu>
      </Grid>
>>>>>>> 4b0b7496de18deb407cb1927881b64f66b8a91fd
    </>
  )
}

export default App
