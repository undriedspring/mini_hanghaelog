import { createAction, handleActions } from 'redux-actions'
import produce from 'immer'
import { apis } from '../../shared/api'

// **************** Action Type **************** //

const UPLOADING = 'UPLOADING'
const GET_IMAGE_URL = 'GET_IMAGE_URL'
const SET_PREVIEW = 'SET_PREVIEW'

// **************** Action Creators **************** //

const uploading = createAction(UPLOADING, (uploading) => ({ uploading }))
const getImageUrl = createAction(GET_IMAGE_URL, (file) => ({ file }))
const setPreview = createAction(SET_PREVIEW, (preview) => ({ preview }))

// **************** Initial Data **************** //

const initialState = {
  image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqCQrU2ehVPXr5xwc4CBn-uOUjT3dAPOSZSQ&usqp=CAU',
  uploading: false,
  preview: null,
  imgDT: null,
}

// **************** Middlewares **************** //

const uploadImageDB = (file) => {
  return async function (dispatch, getState, { history }) {
    console.log(file)
    dispatch(getImageUrl(file))
    // try {
    //   const { data } = await apis.uploadImage(file)
    //   console.log(data)
    //   console.log(data.image_url)
    //   dispatch(getImageUrl(data.image_url))
    // } catch (error) {
    //   console.log(error)
    // }
    // apis
    //   .uploadImage(file)
    //   .then((res) => {
    //     console.log(res)
    //     console.log(res.data)
    //   })
    //   .catch((error) => {
    //     console.log('이미지 업로드에 문제가 발생했습니다', error)
    //   })
  }
}

// **************** Reducer **************** //

export default handleActions(
  {
    [GET_IMAGE_URL]: (state, action) =>
      produce(state, (draft) => {
        draft.imgDT = action.payload.file
      }),
    [UPLOADING]: (state, action) =>
      produce(state, (draft) => {
        draft.uploading = action.payload.uploading
      }),
    [SET_PREVIEW]: (state, action) =>
      produce(state, (draft) => {
        draft.preview = action.payload.preview
      }),
  },
  initialState
)

// **************** Export **************** //

const actionCreators = {
  uploading,
  getImageUrl,
  uploadImageDB,
  setPreview,
}

export { actionCreators }
