import React from 'react'
import { Grid, Text } from '../elements/index'
import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { actionCreators as userActions } from '../redux/modules/user'

import styled from 'styled-components'

const Register = (props) => {
  const dispatch = useDispatch()

  //이름, 이메일, 비밀번호, 비밀번호 확인
  const [nickname, setNickName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordCheck, setPasswordCheck] = useState('')

  //오류메시지 상태저장
  const [nameMessage, setNameMessage] = useState('')
  const [emailMessage, setEmailMessage] = useState('')
  const [passwordMessage, setPasswordMessage] = useState('')
  const [passwordCheckMessage, setPasswordCheckMessage] = useState('')

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
      setEmailMessage('올바른 이메일 형식이에요 (*´꒳`*)')
      setIsEmail(true)
    }
  }

  // 이름
  const onChangeName = (e) => {
    setNickName(e.target.value)
    if (e.target.value.length < 2 || e.target.value.length > 11) {
      setNameMessage('2글자 이상 11글자 미만으로 입력해주세요.')
      setIsName(false)
    } else {
      setNameMessage('올바른 이름 형식이에요 (*´꒳`*)')
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
      setPasswordMessage('안전한 비밀번호에요 (*´꒳`*)')
      setIsPassword(true)
    }
  }

  // 비밀번호 확인
  const onChangePasswordConfirm = (e) => {
    const passwordConfirmCurrent = e.target.value
    setPasswordCheck(passwordConfirmCurrent)

    if (password === passwordConfirmCurrent) {
      setPasswordCheckMessage('비밀번호를 똑같이 입력했어요 (*´꒳`*)')
      setIsPasswordConfirm(true)
    } else {
      setPasswordCheckMessage('비밀번호가 일치하지 않습니다.')
      setIsPasswordConfirm(false)
    }
  }

  const register = () => {
    if (email === '' || nickname === '' || password === '' || passwordCheck === '') {
      window.alert('모두 입력해주세요!')
      return
    }
    dispatch(userActions.registerDB(email, nickname, password, passwordCheck))
  }

  return (
    <React.Fragment>
      <Grid maxWidth="400px" margin="auto">
        <Grid margin="120px 0px 150px 0px" border="2px solid #a496c7">
          <Grid padiing="50px">
            <Text size="36px" weight="700" align="center">
              Signup
            </Text>

            {/* <form onSubmit={register}></form> */}

            <Grid maxWidth="350px" margin="auto">
              <Grid>
                <SignupInput placeholder="이메일 아이디" type="email" typeName="email" onChange={onChangeEmail}></SignupInput>
                {email.length > 0 && <Span className={`message ${isEmail ? 'success' : 'error'}`}>{emailMessage}</Span>}
              </Grid>
            </Grid>
            <Grid maxWidth="350px" margin="auto">
              <Grid>
                <SignupInput maxlength="10" placeholder="닉네임" text="이름" type="text" typeName="name" onChange={onChangeName} />
                {nickname.length > 0 && <Span className={`message ${isName ? 'success' : 'error'}`}>{nameMessage}</Span>}
              </Grid>
            </Grid>
            <Grid maxWidth="350px" margin="auto">
              <Grid>
                <SignupInput
                  type="password"
                  placeholder="비밀번호"
                  onChange={onChangePassword}
                  passwordText="비밀번호 (숫자+영문자+특수문자 조합으로 8자리 이상)"
                  title="비밀번호"
                  typeTitle="password"
                />
                {password.length > 0 && <Span className={`message ${isPassword ? 'success' : 'error'}`}>{passwordMessage}</Span>}
              </Grid>
            </Grid>
            <Grid maxWidth="350px" margin="auto">
              <Grid>
                <SignupInput type="password" placeholder="비밀번호 확인" onChange={onChangePasswordConfirm} passwordText=" " title="비밀번호 확인" typeTitle="passwordConfirm" />
                {setPasswordCheck.length > 0 && <Span className={`message ${isPasswordConfirm ? 'success' : 'error'}`}>{passwordCheckMessage}</Span>}
              </Grid>
            </Grid>
            <Grid margin="35px 0px 25px 0px">
              <SignupButton type="submit" disabled={!(isName && isEmail && isPassword && isPasswordConfirm)} onClick={register}>
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
  border-radius: 30px;
  cursor: pointer;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  background-color: #6e6e6e;
  color: #fff;
  :disabled {
    opacity: 0.5;
    cursor: not-allowed;
    pointer-events: none;
  }

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

export default Register
