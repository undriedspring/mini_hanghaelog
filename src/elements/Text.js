import React from 'react'
import styled from 'styled-components'

const Text = (props) => {
  const { children, color, margin, size } = props

  const styles = {
    color: color,
    margin: margin,
    size: size,
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
}

const P = styled.p`
  color: ${(props) => props.color};
  font-size: ${(props) => props.size};
  ${(props) => (props.margin ? `${props.margin};` : '')}
`

export default Text
