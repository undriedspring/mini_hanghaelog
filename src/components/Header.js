import React from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { actionCreators as userActions } from '../redux/modules/user'
import { history } from '../redux/configureStore'

import { getCookie, deleteCookie } from '../shared/Cookie'
import { Grid, Button, Text } from '../elements'
import '../index.css'

const Header = (props) => {
  // **** Login **** //
  // if (is_login && is_session) {
  // return (
  //   <Grid is_flex width="100%" height="60px" borderBottom="0.5px solid #333" bg="lightgrey" position="fixed" top="61px" zIndex="1">
  //       <Grid is_flex maxWidth="1000px" minWidth="650px" height="60px" margin="0 auto" bg="#FFF" zIndex="2">
  //         <Grid width="auto" margin="0 20px">
  //           <Logo>HHL</Logo>
  //         </Grid>
  //         <Grid is_flex width="auto">
  //           <HeaderBtn style={{ border: 'none', margin: '0 10px' }}>nickname</HeaderBtn>
  //           <HeaderBtn style={{ margin: '0 20px 0 10px' }}>LOGOUT</HeaderBtn>
  //         </Grid>
  //       </Grid>
  //     </Grid>
  // )
  // }

  // **** Logout **** //
  const dispatch = useDispatch()
  const is_login = useSelector((state) => state.user.is_login)

  if (is_login) {
    return (
      <Grid is_flex width="100%" height="60px" borderBottom="0.5px solid #333" bg="lightgrey" top="61px" zIndex="1">
        <Grid is_flex maxWidth="1000px" minWidth="650px" height="60px" margin="0 auto" bg="#FFF" zIndex="2">
          <Grid width="auto" margin="0 20px">
            <Logo>HHL</Logo>
          </Grid>
          <Grid is_flex width="auto">
            <Nickname>
              <span style={{ fontWeight: '700' }}>nickname</span> 님, 반가워요!
            </Nickname>
            <HeaderBtn
              style={{ margin: '0 20px 0 10px' }}
              onClick={() => {
                dispatch(userActions.logOut({}))
              }}
            >
              LOGOUT
            </HeaderBtn>
          </Grid>
        </Grid>
      </Grid>
    )
  }

  return (
    <React.Fragment>
      <Grid is_flex width="100%" height="60px" borderBottom="0.5px solid #333" bg="lightgrey" top="0" zIndex="1">
        <Grid is_flex maxWidth="1000px" minWidth="650px" height="60px" margin="0 auto" bg="#FFF" zIndex="2">
          <Grid width="auto" margin="0 20px">
            <Logo>HHL</Logo>
          </Grid>
          <Grid is_flex width="auto">
            <HeaderBtn
              style={{ margin: '0 10px' }}
              onClick={() => {
                history.push('/auth/login')
              }}
            >
              LOGIN
            </HeaderBtn>
            <HeaderBtn
              style={{ margin: '0 20px 0 10px' }}
              onClick={() => {
                history.push('/auth/register')
              }}
            >
              JOIN
            </HeaderBtn>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

const Logo = styled.p`
  font-family: 'Expletus Sans', cursive;
  font-size: 2rem;
  font-weight: 900;
`

const HeaderBtn = styled.button`
  width: 120px;
  height: 40px;
  box-sizing: border-box;
  border: none;
  border-radius: 20px;
  outline: none;
  background-color: #333;
  color: #fdfdfd;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;

  will-change: transform;
  transition: transform 450ms;
  &:hover {
    background-color: #a496c7;
    transition: transform 500ms;
    transform: translateY(-3px);
  }
`

const Nickname = styled.p`
  margin: 0 10px;
  width: 300px;
  border: none;
  border-radius: 20px;
  outline: none;
  background-color: #fff;
  font-size: 14px;
  text-align: right;
  vertical-align: middle;
`

export default Header
