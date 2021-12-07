import React from 'react'
import styled from 'styled-components'

const Button = (props) => {
  const { display, align, is_float, text, _onClick, margin, width, height, padding, children, bg, boxShadow, fontFamily, cursor, borderColor, borderRadius, border } = props

  if (is_float) {
    return (
      <React.Fragment>
        <FloatButton onClick={_onClick}>{text ? text : children}</FloatButton>
      </React.Fragment>
    )
  }

  const styles = {
    margin: margin,
    padding: padding,
    width: width,
    height: height,
    bg: bg,
    display: display,
    boxShadow: boxShadow,
    fontFamily: fontFamily,
    cursor: cursor,
    borderColor: borderColor,
    borderRadius: borderRadius,
    border: border,
    align: align,
  }

  return (
    <React.Fragment>
      <Button1 {...styles} onClick={_onClick}>
        {text ? text : children}
      </Button1>
    </React.Fragment>
  )
}

Button.defaultProps = {
  children: null,
  is_float: false,
  text: false,
  _onClick: () => {},
  margin: 'false',
  width: 'false',
  height: 'false',
  padding: 'false',
  bg: 'false',
  boxShadow: 'false',
  cursor: 'pointer',
  display: 'false',
  fontFamily: 'false',
  borderColor: 'false',
  borderRadius: 'false',
  border: 'false',
  align: 'false',
}

const Button1 = styled.button`
  margin: ${(props) => props.margin};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  padding: ${(props) => props.padding};
  ${(props) => (props.bg ? `background-color: ${props.bg};` : '')}
  ${(props) => (props.boxShadow ? `box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);` : '')}
    ${(props) => (props.cursor ? `cursor: ${props.cursor};` : '')}
    ${(props) => (props.fontFamily ? `font-family: ${props.fontFamily}` : '')}
    ${(props) => (props.borderColor ? `border-color: ${props.borderColor};` : '')}
    ${(props) => (props.borderRadius ? `border-radius: ${props.borderRadius};` : '')}
    ${(props) => (props.border ? `border: ${props.border};` : '')}
    ${(props) => (props.display ? `display: ${props.display};` : '')} 
    ${(props) => (props.align ? `align-items: ${props.align};` : '')}
`

const FloatButton = styled.button`
  width: 'auto';
  height: 'auto';
  background-color: #212121;
  color: #ffffff;
  box-sizing: border-box;
  font-size: 'auto';
  font-weight: 'auto';
  position: fixed;
  bottom: 'auto';
  right: 'auto';
  text-align: center;
  vertical-align: middle;
  border: 'none';
  border-radius: 'auto';
  cursor: 'pointer';
`

export default Button
