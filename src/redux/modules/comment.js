// import { createAction, handleActions } from 'redux-actions'
// import { produce } from 'immer'

// // Actions Types
// const GET_COMMENT = 'GET_COMMENT'
// const ADD_COMMENT = 'ADD_COMMENT'
// const SET_COMMENT = 'SET_COMMENT'
// const DELETE_COMMENT = 'DELETE_COMMENT'
// const LOADING_COMMENT = 'LOADING_COMMENT'

// // Action Creators
// const getComment = createAction(GET_COMMENT)
// const addComment = createAction(ADD_COMMENT, (postId, comment) => ({ postId, comment }))
// const setComment = createAction(SET_COMMENT, (postId, comment_list) => ({ postId, comment_list }))
// const deleteComment = createAction(DELETE_COMMENT, () => ({}))
// const loading = createAction(LOADING_COMMENT, (is_loading_comment) => ({ is_loading_comment }))

// const initialState = {
//   list: [],
//   is_loaded: false,
// }

// // Middlewares
// // const addCommentDB = (params, userInfo) => {
// //   return async function (disspatch, getState, { history }) {
// //     const payload = await apiPostComment(params)
// //     dispatch(addComment(payload.data.data, userInfo))
// //   }
// // }

// // Reducer
// const actionCreators = {
//   getComment,
//   addComment,
//   setComment,
//   // deleteComment,
// }

// export { actionCreators }
