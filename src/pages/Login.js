import React from 'react'
import { Grid, Button, Input, Text } from '../elements/index'

const Login = (props) => {
  return (
    <React.Fragment>
      <Grid maxWidth="500px" margin="auto">
        <Grid padding="50px">
          <Text size="36px" weight="700" align="center">
            로그인
          </Text>
          <Grid>
            <Text>
              <Input placeholder="아이디를 입력해주세요"></Input>
            </Text>
          </Grid>
          <Grid margin="0px 0px 30px 0px">
            <Text>
              <Input placeholder="비밀번호를 입력해주세요"></Input>
            </Text>
          </Grid>
          <Button margin="auto" display="block" align="center" border="none" width="300px" height="50px" borderRadius="10px">
            로그인하기
          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

export default Login