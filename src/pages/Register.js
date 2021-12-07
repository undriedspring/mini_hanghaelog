import React from 'react'
import { Grid, Button, Input, Text } from '../elements/index'

const Register = (props) => {
  return (
    <React.Fragment>
      <Grid maxWidth="400px" margin="auto">
        <Grid margin="200px 0px 0px 0px" border="2px solid #a496c7">
          <Grid padiing="50px">
            <Text size="36px" weight="700" align="center">
              Signup
            </Text>
            <Grid maxWidth="350px" margin="auto">
              <Text>
                <Input placeholder="이메일 아이디"></Input>
              </Text>
            </Grid>
            <Grid maxWidth="350px" margin="auto">
              <Text>
                <Input placeholder="닉네임"></Input>
              </Text>
            </Grid>
            <Grid maxWidth="350px" margin="auto">
              <Text>
                <Input placeholder="비밀번호"></Input>
              </Text>
            </Grid>
            <Grid maxWidth="350px" margin="auto">
              <Text>
                <Input placeholder="비밀번호 재입력"></Input>
              </Text>
            </Grid>
            <Grid margin="40px 0px 25px 0px">
              <Button margin="auto" display="block" align="center" border="none" width="300px" height="50px" borderRadius="10px">
                회원가입
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

export default Register
