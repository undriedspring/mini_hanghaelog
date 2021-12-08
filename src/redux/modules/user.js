import { createAction, handleActions } from 'redux-actions'
import { produce } from 'immer'

import { setCookie, getCookie, deleteCookie } from '../../shared/Cookie'
import { applyMiddleware } from 'redux'

import { apis } from '../../shared/api'

const LOG_IN = 'LOG_IN'
const LOG_OUT = 'LOG_OUT'
const GET_USER = 'GET_USER'
const SET_USER = 'SET_USER'

// const logIn = createAction(LOG_IN, (user) => ({ user }))
const logOut = createAction(LOG_OUT, (user) => ({ user }))
const getUser = createAction(GET_USER, (user) => ({ user }))
const setUser = createAction(SET_USER, (user) => ({ user }))

const initialState = {
  user: null,
  is_login: false,
}

const user_initial = {
  email: 'test@tt.tt',
  nickname: 'test',
  password: 'tttt12345*',
  passwordcheck: 'tttt12345*',
}

//middleware
const loginAction = (user) => {
  return function (dispatch, getState, { history }) {
    console.log(history)
    dispatch(setUser(user))
    history.push('/posts')
  }
}

const registerDB = (email, nickname, password, passwordCheck) => {
  return function (dispatch, getState, { history }) {
    apis
      .register(email, nickname, password, passwordCheck)
      .then((res) => {
        history.push('/login')
      })
      .catch((err) => {
        console.log(err)
      })
  }
}

const logInDB = (email, password) => {
  return function (dispatch, getState, { history }) {
    apis.login(email, password).then((res) => {
      setCookie()
    })
  }
}

const logOutDB = () => {
  return function (dispatch, getState, { history }) {
    deleteCookie('token')
  }
}

const loginCheckDB = () => {
  return function (dispatch, getState, { history }) {}
}

//reducer
export default handleActions(
  {
    [SET_USER]: (state, action) =>
      produce(state, (draft) => {
        setCookie('is_login', 'success')
        draft.user = action.payload.user
        draft.is_login = true
      }),
    [LOG_OUT]: (state, action) =>
      produce(state, (draft) => {
        deleteCookie('is_login')
        draft.user = null
        draft.is_login = false
      }),
    [GET_USER]: (state, action) => produce(state, (draft) => {}),
  },
  initialState
)

const actionCreators = {
  setUser,
  logOut,
  getUser,
  loginAction,
  registerDB,
  logInDB,
  logOutDB,
  loginCheckDB,
}

export { actionCreators }
