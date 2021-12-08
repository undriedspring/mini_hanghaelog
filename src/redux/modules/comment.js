import { createAction, handleActions } from 'redux-actions'
import '../../shared/api'
import axios from 'axios'
import { produce } from 'immer'

// Actions Types
const GET_COMMENT = 'GET_COMMENT'
const ADD_COMMENT = 'ADD_COMMENT'
const SET_COMMENT = 'SET_COMMENT'
const DELETE_COMMENT = 'DELETE_COMMENT'
const LOADING_COMMENT = 'LOADING_COMMENT'

// Action Creators
const getComment = createAction(GET_COMMENT)
const addComment = createAction(ADD_COMMENT, (comment, postId) => ({ comment, postId }))
const setComment = createAction(SET_COMMENT, (commentId, params) => ({ commentId, params }))
const deleteComment = createAction(DELETE_COMMENT, (params) => ({ params }))
const loading = createAction(LOADING_COMMENT, (is_loading_comment) => ({ is_loading_comment }))

const initialState = {
  commentId: null,
  userId: null,
  postId: null,
  comment: '',
  is_loaded: false,
}

// Middlewares
// const addCommentDB = (params, userInfo) => {
//   return async function (disspatch, getState, { history }) {
//     const payload = await apiPostComment(params)
//     dispatch(addComment(payload.data.data, userInfo))
//   }
// }

// Reducer
const actionCreators = {
  getComment,
  addComment,
  setComment,
  // deleteComment,
}

export { actionCreators }
