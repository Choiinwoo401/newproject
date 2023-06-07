import React from 'react'
import Login from './Login'

const LoginPage = ( {onLoginSuccess}) => {
  return (
    <div><Login onLoginSuccess={onLoginSuccess} /></div>
  )
}

export default LoginPage