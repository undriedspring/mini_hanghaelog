import { createAction, handleActions } from 'redux-actions'
import { produce } from 'immer'
import 'moment'
import 'moment/locale/ko'
import moment from 'moment'

// ************ modules ************ //
import { actionCreators as imageActions } from './image'
import { apis } from '../../shared/api'

// // ************ Action Type ************ //

// const GET_POST = 'GET_POST'
// const ADD_POST = 'ADD_POST'
// const EDIT_POST = 'EDIT_POST'
// const DELETE_POST = 'DELETE_POST'
// const LOADING = 'LOADING'

// // ************ Action Creator ************ //

const getPost = createAction(GET_POST, (post_list, paging) => ({ post_list, paging }))
const addPost = createAction(ADD_POST, (post) => ({ post }))
const editPost = createAction(EDIT_POST, (postId, post) => ({ postId, post }))
const deletePost = createAction(DELETE_POST, (postId) => ({ postId }))
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

    if (_paging.start && !_paging.next) {
      return
    }

    dispatch(loading(true))

    try {
      const { data } = await apis.posts()
      dispatch(getPost(data))
      dispatch(imageActions.setPreview(null))
    } catch (error) {
      console.log('게시글 조회에 문제가 발생했습니다.', error)
    }
  }
}

const addPostDB = (post) => {
  return async function (dispatch, getState, { history }) {
    const _user = getState().user.user

    const user_info = {
      userId: _user.userId,
      nickname: _user.nickname,
      // 프로필 사진 설정할지 ??
      userProfile: _user.userProfile,
    }

    try {
      await apis.addPost(post)
      // 리덕스에 추가할 때 db의 postId 값 가져와서 같이 넣어줘야 하지 않는지 확인 필요
      // 만약 postId도 가져와서 리덕스에 저장해야 한다면 현재 api 에서 post 한개만 가져올 수 있는지??
      dispatch(addPost({ ...post, ...user_info }))
      history.replace('/posts')
      dispatch(imageActions.setPreview(null))
    } catch (error) {
      console.log('게시글 작성에 문제가 발생했습니다.', error)
      window.alert('게시글 작성에 문제가 발생했습니다')
    }
  }
}

// ************ Reducer ************ //

export default handleActions({}, initialState)

// ************ Export ************ //

const actionCreators = {
  getPost,
  getPostDB,
  addPost,
  editPost,
  deletePost,
  loading,
}

export { actionCreators }
