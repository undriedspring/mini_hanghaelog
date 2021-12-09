import { createAction, handleActions } from 'redux-actions'
import produce from 'immer'
import { apis } from '../../shared/api'

// **************** Action Type **************** //

const UPLOADING = 'UPLOADING'
const UPLOAD_IMAGE = 'UPLOAD_IMAGE'
const SET_PREVIEW = 'SET_PREVIEW'

// **************** Action Creators **************** //

const uploading = createAction(UPLOADING, (uploading) => ({ uploading }))
const uploadImage = createAction(UPLOAD_IMAGE, (image_url) => ({ image_url }))
const setPreview = createAction(SET_PREVIEW, (preview) => ({ preview }))

// **************** Initial Data **************** //

const initialState = {
  image_url: '',
  uploading: false,
  preview: null,
}

// **************** Middlewares **************** //

const uploadImageDB = (file) => {
  return async function (dispatch, getState, { history }) {
    const fileObj = {
      fileObj: file,
    }

    console.log(file)
    console.log(fileObj)

    try {
      const { data } = await apis.uploadImage(fileObj)
      // console.log(data)
      // console.log(data.image_url)
      dispatch(uploadImage(data.image_url))
    } catch (error) {
      console.log(error)
    }
  }
}

// **************** Reducer **************** //

export default handleActions(
  {
    [UPLOAD_IMAGE]: (state, action) =>
      produce(state, (draft) => {
        draft.image_url = action.payload.image_url
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
  uploadImage,
  uploadImageDB,
  setPreview,
}

export { actionCreators }
