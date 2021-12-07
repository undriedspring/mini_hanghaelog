import React from "react";
import styled from "styled-components"

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
  ${(props) => (props.size ? `font-size: ${props.size};` : '')}
  ${(props) => (props.margin ? `${props.margin};` : '')}
  ${(props) => (props.weight ? `font-weight: ${props.weight};` : '')}
  ${(props) => (props.align ? `text-align: ${props.align};` : '')}
`

const Text =(props) => {
    const {children, color, margin, size} = props;

    const styles = {
        color: color,
        margin: margin,
        size: size
    }
    return(
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
    ${(props) => props.margin ? `${props.margin};` : ''}
`   


export default Text;