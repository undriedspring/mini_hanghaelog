import { createAction, handleActions } from 'redux-actions'
import { apis } from '../../shared/api'
import axios from 'axios'
import { produce } from 'immer'

// Actions Types
const GET_COMMENT = 'GET_COMMENT'
const ADD_COMMENT = 'ADD_COMMENT'
const SET_COMMENT = 'SET_COMMENT'
const DELETE_COMMENT = 'DELETE_COMMENT'
const LOADING_COMMENT = 'LOADING_COMMENT'

// Action Creators
const getComment = createAction(GET_COMMENT, (comment) => ({ comment }))
const addComment = createAction(ADD_COMMENT, (comment, postId) => ({ comment, postId }))
const setComment = createAction(SET_COMMENT, (commentId, params) => ({ commentId, params }))
const deleteComment = createAction(DELETE_COMMENT, (commentId, params) => ({ commentId, params }))
const loadingComment = createAction(LOADING_COMMENT, (is_loading_comment) => ({ is_loading_comment }))

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
export default handleActions(
  {
    [GET_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        draft.list[action.payload.postId] = action.payload.comments
      }),
    [ADD_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        draft.list[action.payload.postId].unshift(action.payload.comment)
      }),
    [SET_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        draft.list[action.payload.commentId] = action.payload.comments
      }),
    [DELETE_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        draft.list[action.payload.commentId] = action.payload.comments
      }),
    [LOADING_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        draft.is_loading = action.payload.is_loading
      }),
  },
  initialState
)

const actionCreators = {
  getComment,
  addComment,
  setComment,
  deleteComment,
  loadingComment,
}

export { actionCreators }
