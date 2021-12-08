import React from 'react'
import Response from './Response'
import { useSelector } from 'react-redux'

const Permit = (props) => {
  const is_login = useSelector((state) => state.RESP.LOGIN.ok)
  const _token_key = `firebase:authUser:${apiKey}:[DEFAULT]`
  const is_token = Storage.getItem(_token_key) ? true : false

  console.log(RESP.LOGIN.ok)

  if (is_token && is_login) {
    return <React.Fragment>{props.children}</React.Fragment>
  }
  return null
}

export default Permit
