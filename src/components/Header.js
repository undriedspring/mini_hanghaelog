import React from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { actionCreators as userActions } from '../redux/modules/user'
import { history } from '../redux/configureStore'

import { Grid, Button, Text } from '../elements'
import '../index.css'

const Header = (props) => {
  const a = localStorage.getItem('id')
  const nickname = localStorage.getItem('nickname')
  const dispatch = useDispatch()
  const __is_login = useSelector((state) => state.user.is_login)
  const _is_login = a ? true : false
  const is_login = _is_login || __is_login

  console.log(__is_login)
  console.log(_is_login)
  console.log(is_login)

  // **** Login **** //
  if (is_login) {
    return (
      <Grid is_flex width="100%" height="60px" borderBottom="0.5px solid #b7b7b7" bg="#FFF" position="sticky" top="0" zIndex="1">
        <Grid is_flex maxWidth="1000px" minWidth="650px" height="60px" margin="0 auto" bg="#FFF" zIndex="2">
          <Grid width="auto" margin="0 20px">
            <Logo
              onClick={() => {
                history.push('/')
              }}
            >
              HHL
            </Logo>
          </Grid>
          <Grid is_flex width="auto">
            <Nickname>
              <span style={{ fontWeight: '700' }}>{nickname}</span> 님, 반가워요!
            </Nickname>
            <HeaderBtn
              style={{ margin: '0 20px 0 10px' }}
              onClick={() => {
                dispatch(userActions.logOutDB({}))
              }}
            >
              LOGOUT
            </HeaderBtn>
          </Grid>
        </Grid>
      </Grid>
    )
  }

  // **** Logout **** //
  return (
    <React.Fragment>
      <Grid is_flex width="100%" height="60px" borderBottom="0.5px solid #b7b7b7" bg="#FFF" position="sticky" top="0" zIndex="1">
        <Grid is_flex maxWidth="1000px" minWidth="650px" height="60px" margin="0 auto" bg="#FFF" zIndex="2">
          <Grid width="auto" margin="0 20px">
            <Logo
              onClick={() => {
                history.push('/')
              }}
            >
              HHL
            </Logo>
          </Grid>
          <Grid is_flex width="auto">
            <HeaderBtn
              style={{ margin: '0 10px' }}
              onClick={() => {
                history.push('/login')
              }}
            >
              LOGIN
            </HeaderBtn>
            <HeaderBtn
              style={{ margin: '0 20px 0 10px' }}
              onClick={() => {
                history.push('/register')
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
  font-family: 'ONE-Mobile-POP';
  font-size: 2.5rem;
  font-weight: 900;
  cursor: pointer;
  color: #a496c7;
`

const HeaderBtn = styled.button`
  width: 120px;
  height: 40px;
  box-sizing: border-box;
  border: none;
  border-radius: 20px;
  outline: none;
  background-color: #6e6e6e;
  color: #fdfdfd;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  /* 추가 */
  text-transform: uppercase;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  /* 추가 */
  will-change: transform;
  transition: transform 450ms;
  transition-property: background-color;
  transition-duration: 0.3s;
  transition-timing-function: linear;
  &:hover {
    background-color: #a496c7;
    box-shadow: 0px 15px 20px rgba(161, 150, 199, 0.4);
    color: #fff;
    transform: translateY(-3px);
    transition: transform 500ms;
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
