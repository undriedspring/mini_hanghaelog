import React from 'react'
import { Grid, Button, Input, Text } from '../elements/index'
import { useState } from 'react'

import styled from 'styled-components'

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

  // 이름
  const onChangeName = (e) => {
    setName(e.target.value)
    if (e.target.value.length < 2 || e.target.value.length > 5) {
      setNameMessage('2글자 이상 5글자 미만으로 입력해주세요.')
      setIsName(false)
    } else {
      setNameMessage('올바른 이름 형식입니다 :)')
      setIsName(true)
    }
  }

  // 비밀번호
  const onChangePassword = (e) => {
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/
    const passwordCurrent = e.target.value
    setPassword(passwordCurrent)

    if (!passwordRegex.test(passwordCurrent)) {
      setPasswordMessage('숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요.')
      setIsPassword(false)
    } else {
      setPasswordMessage('안전한 비밀번호에요 : )')
      setIsPassword(true)
    }
  }

  // 비밀번호 확인
  const onChangePasswordConfirm = (e) => {
    const passwordConfirmCurrent = e.target.value
    setPasswordConfirm(passwordConfirmCurrent)

    if (password === passwordConfirmCurrent) {
      setPasswordConfirmMessage('비밀번호를 똑같이 입력했어요 : )')
      setIsPasswordConfirm(true)
    } else {
      setPasswordConfirmMessage('비밀번호가 일치하지 않습니다.')
      setIsPasswordConfirm(false)
    }
  }

  return (
    <React.Fragment>
      <Grid maxWidth="400px" margin="auto">
        <Grid margin="150px 0px 150px 0px" border="2px solid #a496c7">
          <Grid padiing="50px">
            <Text size="36px" weight="700" align="center">
              Signup
            </Text>
            <Grid maxWidth="350px" margin="auto">
              <Grid>
                <SignupInput placeholder="이메일 아이디" type="email" typeName="email" onChange={onChangeEmail}></SignupInput>
                {email.length > 0 && <Span className={`message ${isEmail ? 'success' : 'error'}`}>{emailMessage}</Span>}
              </Grid>
            </Grid>
            <Grid maxWidth="350px" margin="auto">
              <Grid>
                <SignupInput placeholder="닉네임" text="이름" type="text" typeName="name" onChange={onChangeName} />
                {name.length > 0 && <Span className={`message ${isName ? 'success' : 'error'}`}>{nameMessage}</Span>}
              </Grid>
            </Grid>
            <Grid maxWidth="350px" margin="auto">
              <Grid>
                <SignupInput placeholder="비밀번호" onChange={onChangePassword} passwordText="비밀번호 (숫자+영문자+특수문자 조합으로 8자리 이상)" title="비밀번호" typeTitle="password" />
                {password.length > 0 && <Span className={`message ${isPassword ? 'success' : 'error'}`}>{passwordMessage}</Span>}
              </Grid>
            </Grid>
            <Grid maxWidth="350px" margin="auto">
              <Grid>
                <SignupInput placeholder="비밀번호 확인" onChange={onChangePasswordConfirm} passwordText=" " title="비밀번호 확인" typeTitle="passwordConfirm" />
                {passwordConfirm.length > 0 && <Span className={`message ${isPasswordConfirm ? 'success' : 'error'}`}>{passwordConfirmMessage}</Span>}
              </Grid>
            </Grid>
            <Grid margin="35px 0px 25px 0px">
              <SignupButton type="submit" disabled={!(isName && isEmail && isPassword && isPasswordConfirm)}>
                회원가입
              </SignupButton>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

const SignupInput = styled.input`
  width: 98%;
  height: 35px;
  margin: 8px 0px;
`

const Span = styled.span`
  font-size: 13px;
  color: #ffa07a;
`
const SignupButton = styled.button`
  margin: auto;
  display: block;
  align-items: center;
  border: none;
  width: 300px;
  height: 50px;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
`

export default Register
