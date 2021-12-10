import React, { useState } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'

// **** component, elements, modules, apis **** //
import { Grid } from '../elements'
import { actionCreators as imageActions } from '../redux/modules/image'
import { actionCreators as postActions } from '../redux/modules/post'

const Upload = (props) => {
  const dispatch = useDispatch()

  const is_uploading = useSelector((state) => state.image.uploading)
  const fileInput = React.useRef()

  const [filename, setFilename] = React.useState('')

  const selectFile = async (e) => {
    const reader = new FileReader()
    // 이미지 업로드 POST api request 파라미터에 넣을 데이터
    const file = fileInput.current.files[0]
    console.log(file)

    reader.readAsDataURL(file)
    reader.onloadend = () => {
      console.log(reader.result)
      dispatch(imageActions.setPreview(reader.result))
    }

    setFilename(e.target.value)
  }

  return (
    <React.Fragment>
      <Grid>
        <Label className="input-file-button" htmlFor="img">
          업로드
        </Label>
        <UploadName value={filename} placeholder="첨부파일"></UploadName>
        <input name="img" type="file" accept="image/*" id="img" style={{ display: 'none' }} onChange={selectFile} ref={fileInput}></input>
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
