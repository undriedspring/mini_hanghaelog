import React from 'react'
import { Grid, Button, Input, Text } from '../elements/index'

import { actionCreators as userActions } from '../redux/modules/user'
import { useDispatch } from 'react-redux'

import styled from 'styled-components'

const Login = (props) => {
  const dispatch = useDispatch()
  const [id, setId] = React.useState('')
  const [pwd, setPwd] = React.useState('')

  const changeId = (e) => {
    setId(e.target.value)
  }

  const changePwd = (e) => {
    setPwd(e.target.value)
  }

  const login = () => {
    dispatch(userActions.loginAction({ user_name: 'jawoon' }))
  }

  return (
    <React.Fragment>
      <Grid maxWidth="400px" margin="auto">
        <Grid margin="150px 0px 0px 0px" border="2px solid #a496c7">
          <Grid padiing="50px">
            <Text size="36px" weight="700" align="center">
              Login
            </Text>
            <Grid maxWidth="350px" margin="auto">
              <Text>
                <Input value={id} onChange={changeId} placeholder="이메일 아이디"></Input>
              </Text>
            </Grid>
            <Grid maxWidth="350px" margin="auto">
              <Text>
                <Input type="password" value={pwd} onChange={changePwd} placeholder="비밀번호"></Input>
              </Text>
            </Grid>
            <Grid margin="40px 0px 25px 0px">
              <Button
                margin="auto"
                display="block"
                align="center"
                border="none"
                width="300px"
                height="50px"
                borderRadius="10px"
                _onClick={() => {
                  login()
                }}
              >
                로그인
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

export default Login
