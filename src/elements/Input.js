import React from 'react'
import styled from 'styled-components'

const Input = (props) => {
  const { multiLine, label, placeholder, type, value, is_submit, _onSubmit, _onChange, width } = props

  if (multiLine) {
    return (
      <div>
        {label && <text margin="0px">{label}</text>}
        <ElTextarea value={value} rows={10} placeholder={placeholder} onChange={_onChange}></ElTextarea>
      </div>
    )
  }
  return (
    <>
      <div>
        {label && <text margin="0px">{label}</text>}
        {is_submit ? (
          <ElInput
            type={type}
            placeholder={placeholder}
            onChange={_onChange}
            value={value}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                _onSubmit(e)
              }
            }}
            enabled="true"
          />
        ) : (
          <ElInput type={type} placeholder={placeholder} onChange={_onChange} enabled="true" />
        )}
      </div>
    </>
  )
}

Input.defaultProps = {
  multiLine: false,
  label: false,
  placeholder: '텍스트를 입력해주세요.',
  type: 'text',
  value: '',
  is_submit: false,
  _onSubmit: () => {},
  _onChange: () => {},
}

const ElTextarea = styled.textarea`
  border: 1px solid #a4a4a4;
  width: 100%;
  padding: 12px 4px;
  box-sizing: border-box;
`

const ElInput = styled.input`
  border: 1px solid #a4a4a4;
  width: 100%;
  padding: 12px 4px;
  box-sizing: border-box;
`
export default Input
