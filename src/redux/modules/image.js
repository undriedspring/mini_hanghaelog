import { createAction, handleActions } from 'redux-actions'
import produce from 'immer'

// **************** Action Type **************** //

const GET_IMAGE_URL = 'GET_IMAGE_URL'
const SET_PREVIEW = 'SET_PREVIEW'

// **************** Action Creators **************** //

const getImageUrl = createAction(GET_IMAGE_URL, (imageUrl) => ({ imageUrl }))
const setPreview = createAction(SET_PREVIEW, (preview) => ({ preview }))

// **************** Initial Data **************** //

const initialState = {
  image_url: '',
  preview: null,
}

// **************** Middlewares **************** //

// **************** Reducer **************** //

export default handleActions(
  {
    [GET_IMAGE_URL]: (state, action) =>
      produce(state, (draft) => {
        draft.image_url = action.payload.imageUrl
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
  getImageUrl,
  setPreview,
}

export { actionCreators }
