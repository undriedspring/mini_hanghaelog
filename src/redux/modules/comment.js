import { createAction, handleActions } from 'redux-actions'
import { apis } from '../../shared/fake_api'
import axios from 'axios'
import { produce } from 'immer'

// Actions Types
const GET_COMMENT = 'GET_COMMENT'
const ADD_COMMENT = 'ADD_COMMENT'
const EDIT_COMMENT = 'EDIT_COMMENT'
const DELETE_COMMENT = 'DELETE_COMMENT'
const LOADING_COMMENT = 'LOADING_COMMENT'

// Action Creators
const getComment = createAction(GET_COMMENT, (comment) => ({ comment }))
const addComment = createAction(ADD_COMMENT, (comment, postId) => ({ comment, postId }))
const editComment = createAction(EDIT_COMMENT, (commentId, params) => ({ commentId, params }))
const deleteComment = createAction(DELETE_COMMENT, (commentId, params) => ({ commentId, params }))
const loadingComment = createAction(LOADING_COMMENT, (is_loading_comment) => ({ is_loading_comment }))

const initialState = {
  commentId: null,
  userId: null,
  postId: null,
  comment: '',
  is_loaded: false,
}

// Thunk function
export const _getComment =
  (postId) =>
  async (dispatch, getState, { history }) => {
    try {
      const { data } = await apis.comments(postId)
      dispatch(getComment(data))
    } catch (e) {
      // console.log(`코멘트 불러오기 실패! ${e}`);
    }
  }

export const _addComment =
  (postId, content) =>
  async (dispatch, getState, { history }) => {
    try {
      const { data } = await apis.addComment(postId, content)
      dispatch(addComment(data))
    } catch (e) {}
  }

export const _editComment = (postId, commentId, newContent, setEditMode) => async (dispatch) => {
  const { data } = await apis.editComment(postId, commentId, newContent)
  dispatch(editComment(commentId, data))
  setEditMode(false)
}

export const _deleteComment = (postId, commentId) => (dispatch) => {
  try {
    apis.deleteComment(postId, commentId)
    dispatch(deleteComment(commentId))
  } catch (e) {}
}

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
    [EDIT_COMMENT]: (state, action) =>
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
  editComment,
  deleteComment,
  loadingComment,
}

export { actionCreators }
