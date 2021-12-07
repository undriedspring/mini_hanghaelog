import React from 'react'
import { Grid, Button, Input, Text } from '../elements/index'

const Register = (props) => {
  return (
    <React.Fragment>
      <Grid maxWidth="700px" margin="auto">
        <Text size="36px" weight="700">
          회원가입
        </Text>
        <Grid>
          <Text>
            <Input placeholder="아이디를 입력해주세요"></Input>
          </Text>
        </Grid>
        <Grid>
          <Text>
            <Input placeholder="닉네임을 입력해주세요"></Input>
          </Text>
        </Grid>
        <Grid>
          <Text>
            <Input placeholder="비밀번호를 입력해주세요"></Input>
          </Text>
        </Grid>
        <Grid>
          <Text>
            <Input placeholder="비밀번호를 다시 입력해주세요"></Input>
          </Text>
        </Grid>
        <Button>회원가입하기</Button>
      </Grid>
    </React.Fragment>
  )
}

export default Register
