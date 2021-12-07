import React from 'react'
import { Grid, Button, Input, Text } from '../elements/index'
import { useState } from 'react'

const Register = (props) => {
  //이름, 이메일, 비밀번호, 비밀번호 확인
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')

  //오류메시지 상태저장
  const [nameMessage, setNameMessage] = useState('')
  const [emailMessage, setEmailMessage] = useState('')
  const [passwordMessage, setPasswordMessage] = useState('')
  const [passwordConfirmMessage, setPasswordConfirmMessage] = useState('')

  // 유효성 검사
  const [isName, setIsName] = useState('false')
  const [isEmail, setIsEmail] = useState('false')
  const [isPassword, setIsPassword] = useState('false')
  const [isPasswordConfirm, setIsPasswordConfirm] = useState('false')

  // 이메일
  const onChangeEmail = (e) => {
    const emailRegex = /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/
    const emailCurrent = e.target.value
    setEmail(emailCurrent)

    if (!emailRegex.test(emailCurrent)) {
      setEmailMessage('이메일 형식을 확인해주세요.')
      setIsEmail(false)
    } else {
      setEmailMessage('올바른 이메일 형식이에요 : )')
      setIsEmail(true)
    }
  }

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
