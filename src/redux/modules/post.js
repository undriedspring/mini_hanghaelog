import { createAction, handleActions } from 'redux-actions'
import { produce } from 'immer'
import 'moment'
import 'moment/locale/ko'
import moment from 'moment'

// ************ modules ************ //
import { actionCreators as imageActions } from './image'
import { apis } from '../../shared/api'

// // ************ Action Type ************ //

const GET_POST = 'GET_POST'
const ADD_POST = 'ADD_POST'
const EDIT_POST = 'EDIT_POST'
const DELETE_POST = 'DELETE_POST'
const LOADING = 'LOADING'

// // ************ Action Creator ************ //

const getPost = createAction(GET_POST, (post_list, paging) => ({ post_list, paging }))
const addPost = createAction(ADD_POST, (postData) => ({ postData }))
const editPost = createAction(EDIT_POST, (postId, post) => ({ postId, post }))
const deletePost = createAction(DELETE_POST, (post_id) => ({ post_id }))
const loading = createAction(LOADING, (is_loading) => ({ is_loading }))

// ************ Initial Data ************ //

const initialState = {
  list: [],
  paging: { state: null, next: null, size: 3 },
  is_laoding: false,
}

const initialPost = {
  userId: 1,
  postId: 1,
  nickname: 'zubetcha',
  createAt: moment().format('YYYY-MM-DD HH:mm:ss'),
  content: '',
  imgUrl: 'https://pbs.twimg.com/profile_images/1381421858151563264/-bjvX4Ui_400x400.jpg',
  numOfComments: 10,
}

// ************ Middlewares ************ //

const getPostDB = (start = null, size = 3) => {
  return async function (dispatch, getState, { history }) {
    let _paging = getState().post.paging
    console.log(_paging)
    if (_paging.start && !_paging.next) {
      return
    }

    dispatch(loading(true))

    // 무한스크롤 구현 필요

    try {
      const post_list = await apis.posts()
      dispatch(getPost(post_list.data, _paging))
      dispatch(imageActions.setPreview(null))
    } catch (error) {
      console.log('게시글 조회에 문제가 발생했습니다.', error)
    }
  }
}

const addPostDB = (contents) => {
  return async function (dispatch, getState, { history }) {
    console.log(contents)
    apis
      .addPost(contents)
      .then((res) => {
        dispatch(addPost(res.data))
        history.replace('/posts')
        dispatch(imageActions.setPreview(null))
      })
      .catch((error) => {
        console.log('게시글 작성에 문제가 발생했습니다.', error)
      })
  }
}

const editPostDB = (postId, newContent) => {
  return async function (dispatch, getState, { history }) {
    if (!postId) {
      console.log('게시물 정보가 없습니다.')
      return
    }

    const image_url = getState().image.image_url

    const _image = getState().image.preview
    const _post_idx = getState().post.list.findIndex((post) => post.postId === postId)
    const _post = getState().post.list[_post_idx]

    try {
      if (_image === _post.imgUrl) {
        await apis.editPost(postId, { content: newContent, imgUrl: _post.imgUrl })
        dispatch(editPost(postId, { content: newContent }))
        history.replace('/posts')
      } else {
        await apis.editPost(postId, { content: newContent, imgUrl: image_url })
        dispatch(editPost(postId, { content: newContent, imgUrl: image_url }))
        history.replace('/posts')
      }
    } catch (error) {
      console.log('게시글 수정에 문제가 발생했습니다.', error)
      // window.alert('게시글 작성에 문제가 발생했습니다')
    }
  }
}

const deletePostDB = (postId) => {
  return async function (dispatch, getState, { history }) {
    if (!postId) {
      console.log('게시물 정보가 없습니다.')
      return
    }
    try {
      await apis.deletePost(postId)
      dispatch(deletePost(postId))
    } catch (error) {
      console.log('게시글 삭제에 문제가 발생했습니다.')
      // window.alert('게시글 삭제에 문제가 발생했습니다')
    }
  }
}

// ************ Reducer ************ //

export default handleActions(
  {
    [GET_POST]: (state, action) =>
      produce(state, (draft) => {
        console.log(state)
        draft.list.push(action.payload.post_list)

        draft.list = draft.list.reduce((acc, cur) => {
          console.log(draft.list)
          if (acc.findIndex((a) => a.id === cur.id) === -1) {
            return [...acc, cur]
          } else {
            acc[acc.findIndex((a) => a.id === cur.id)] = cur
            return acc
          }
        }, [])

        if (action.payload.paging) {
          draft.paging = action.payload.paging
        }
        draft.is_loading = false
      }),
    [ADD_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.list.unshift(action.payload.postData)
      }),
    [EDIT_POST]: (state, action) =>
      produce(state, (draft) => {
        let idx = draft.list.findIndex((p) => p.id === action.payload.post_id)
        draft.list[idx] = { ...draft.list[idx], ...action.payload.post }
      }),
    [DELETE_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.list.filter((p) => p.id !== action.payload.post_id)
      }),
    [LOADING]: (state, action) =>
      produce(state, (draft) => {
        draft.is_laoding = action.payload.is_loading
      }),
  },
  initialState
)

// ************ Export ************ //

const actionCreators = {
  getPost,
  getPostDB,
  addPost,
  addPostDB,
  editPost,
  editPostDB,
  deletePost,
  deletePostDB,
  loading,
}

export { actionCreators }
