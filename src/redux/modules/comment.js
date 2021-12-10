import { createAction, handleActions } from 'redux-actions'
import { apis } from '../../shared/api'
import axios from 'axios'
import { produce } from 'immer'
import { actionCreators as postActions } from './post'

// Actions Types
const GET_COMMENT = 'GET_COMMENT'
const ADD_COMMENT = 'ADD_COMMENT'
const EDIT_COMMENT = 'EDIT_COMMENT'
const DELETE_COMMENT = 'DELETE_COMMENT'
const LOADING_COMMENT = 'LOADING_COMMENT'

// Action Creators
const getComment = createAction(GET_COMMENT, (comment_list) => ({ comment_list }))
const addComment = createAction(ADD_COMMENT, (postId, comment) => ({ postId, comment }))
const editComment = createAction(EDIT_COMMENT, (postId, commentId, newComment) => ({ postId, commentId, newComment }))
const deleteComment = createAction(DELETE_COMMENT, (postId, commentId) => ({ postId, commentId }))
const loadingComment = createAction(LOADING_COMMENT, (is_loading_comment) => ({ is_loading_comment }))

const initialState = {
  list: [],
  is_loading_comment: false,
}

const initialComment = {
  comments: [
    {
      id: 1,
      comment: '댓글입니다',
      nickname: 'root',
      createdAt: '2021-12-09T10:28:46.000Z',
      updatedAt: '2021-12-09T10:28:46.000Z',
      userId: 2,
      postId: 1,
    },
  ],

  post: {
    id: 1,
    imgUrl: 'https://hanghaelog.s3.ap-northeast-2.amazonaws.com/original/163898284838428.jpg',
    content: '올라가라',
    nickname: 'root',
    createdAt: '2021-12-09T10:24:20.000Z',
    updatedAt: '2021-12-09T10:26:19.000Z',
    userId: 2,
  },
}

// Thunk function
const getCommentDB = () => {
  return async function (dispatch, getState, { history }) {
    await apis
      .comments()
      .then((response) => {
        dispatch(getComment(response.data))
      })
      .catch((error) => {
        console.log(error)
      })
  }
}

const addCommentDB = (postId, comments) => {
  return async function (dispatch, getState, { history }) {
    await apis
      .addComment(postId, comments)
      .then((response) => {
        dispatch(getComment(response.data))
      })
      .catch((error) => {
        console.log(error)
      })
  }
}

const editCommentDB = (postId, commentId, newContent, setEditMode) => {
  return async function (dispatch, getState, { history }) {
    const { data } = await apis.editComment(postId, commentId, newContent)
    dispatch(editComment(commentId, data))
    setEditMode(false)
  }
}

const deleteCommentDB = (postId, commentId) => {
  return async function (dispatch, getState, { history }) {
    await apis.deleteComment(postId, commentId)
    dispatch(deleteComment(commentId))
  }
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
        draft.is_loading_comment = action.payload.is_loading_comment
      }),
  },
  initialState
)

const actionCreators = {
  getCommentDB,
  addCommentDB,
  editCommentDB,
  deleteCommentDB,
  loadingComment,
}

export { actionCreators }
