import React from 'react'
import styled from 'styled-components'
// import { useSelector, useDispatch } from 'react-redux'

import { Grid, Button, Text } from '../elements'
import '../index.css'

const Header = (props) => {
  // **** Login **** //
  // if (is_login && is_session) {
  // return (
  //   <Grid is_flex width="100%" height="60px" borderBottom="0.5px solid #333" bg="lightgrey" position="fixed" top="61px" zIndex="1">
  //     <Grid is_flex maxWidth="1000px" minWidth="650px" height="60px" margin="0 auto" bg="#FFF" zIndex="2">
  //       <Grid width="auto" margin="0 20px">
  //         <Logo>HHL</Logo>
  //       </Grid>
  //       <Grid width="auto">
  //         <Button text="nickname" _onClick={() => {}} bg="#FFF" width="100px" height="40px" border="none" borderRadius="20px" margin="0 10px"></Button>
  //         <Button text="LOGOUT" _onClick={() => {}} bg="#FFF" width="100px" height="40px" border="0.5px solid #333" borderRadius="20px" margin="0 20px 0 10px"></Button>
  //       </Grid>
  //     </Grid>
  //   </Grid>
  // )
  // }

  // **** Logout **** //
  return (
    <React.Fragment>
      <Grid is_flex width="100%" height="60px" borderBottom="0.5px solid #333" bg="lightgrey" position="fixed" top="0" zIndex="1">
        <Grid is_flex maxWidth="1000px" minWidth="650px" height="60px" margin="0 auto" bg="#FFF" zIndex="2">
          <Grid width="auto" margin="0 20px">
            <Logo>HHL</Logo>
          </Grid>
          <Grid width="auto">
            <Button text="LOGIN" _onClick={() => {}} bg="#FFF" width="100px" height="40px" border="0.5px solid #333" borderRadius="20px" margin="0 10px"></Button>
            <Button text="JOIN" _onClick={() => {}} bg="#FFF" width="100px" height="40px" border="0.5px solid #333" borderRadius="20px" margin="0 20px 0 10px"></Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid is_flex width="100%" height="60px" borderBottom="0.5px solid #333" bg="lightgrey" position="fixed" top="61px" zIndex="1">
        <Grid is_flex maxWidth="1000px" minWidth="650px" height="60px" margin="0 auto" bg="#FFF" zIndex="2">
          <Grid width="auto" margin="0 20px">
            <Logo>HHL</Logo>
          </Grid>
          <Grid is_flex width="auto">
            <Button onmouseover="this.style.backgroundColor='red" text="nickname" _onClick={() => {}} bg="#FFF" width="100px" height="40px" border="none" borderRadius="20px" margin="0 10px"></Button>
            <Button text="LOGOUT" _onClick={() => {}} bg="#FFF" width="100px" height="40px" border="0.5px solid #333" borderRadius="20px" margin="0 20px 0 10px"></Button>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

const Logo = styled.p`
  font-family: 'Expletus Sans', cursive;
  font-size: 2rem;
  font-weight: 900;
`

export default Header
