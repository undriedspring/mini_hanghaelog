import React from 'react'
import styled from 'styled-components'

const Text = (props) => {
  const { children, color, margin, size, weight, align } = props

  const styles = {
    color: color,
    margin: margin,
    size: size,
    weight: weight,
    align: align,
  }
  return (
    <React.Fragment>
      <P {...styles}>{children}</P>
    </React.Fragment>
  )
}

Text.defaultProps = {
  children: null,
  color: '#222831',
  margin: false,
  size: false,
  weight: false,
  align: 'false',
}

const P = styled.p`
  color: ${(props) => props.color};
  font-size: ${(props) => props.size};
  ${(props) => (props.margin ? `${props.margin};` : '')}
  ${(props) => (props.align ? `text-align: ${props.align};` : '')}
`

export default Text
