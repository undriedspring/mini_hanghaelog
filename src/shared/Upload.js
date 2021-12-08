import React, { useState } from 'react'
import styled from 'styled-components'

import { useDispatch, useSelector } from 'react-redux'
import { Grid } from '../elements'
import { actionCreators as imageActions } from '../redux/modules/image'

const Upload = (props) => {
  const dispatch = useDispatch()

  const is_uploading = useSelector((state) => state.image.uploading)
  const fileInput = React.useRef()

  const [filename, setFilename] = React.useState('')

  const selectFile = (e) => {
    console.log(fileInput.current.files[0])
    const reader = new FileReader()
    const file = fileInput.current.files[0]

    reader.readAsDataURL(file)
    reader.onloadend = () => {
      console.log(reader.result)
      dispatch(imageActions.setPreview(reader.result))
    }

    setFilename(e.target.value)
  }

  const uploadFB = () => {
    let image = fileInput.current.files[0]
    // dispatch(imageActions.uploadImageFB(image))
  }

  return (
    <React.Fragment>
      <Grid>
        <Label className="input-file-button" htmlFor="input-file">
          업로드
        </Label>
        <UploadName value={filename} placeholder="첨부파일"></UploadName>
        <input type="file" accept="image/*" id="input-file" style={{ display: 'none' }} onChange={selectFile} ref={fileInput}></input>
      </Grid>
    </React.Fragment>
  )
}

const Label = styled.label`
  width: 100px;
  height: 25px;
  padding: 6px 25px;
  margin-right: 10px;
  background-color: #a496c7;
  border-radius: 4px;
  color: whitesmoke;
  font-size: 12px;
  cursor: pointer;
  box-sizing: border-box;
`

const UploadName = styled.input`
  display: inline-block;
  width: 69%;
  height: 27px;
  padding: 0 10px;
  vertical-align: middle;
  border: 1px solid #dddddd;
  border-radius: 4px;
  font-size: 12px;
  color: #999999;
  box-sizing: border-box;
  background-color: rgb(247, 247, 247);

  &:focus {
    outline: none;
  }
`

export default Upload
