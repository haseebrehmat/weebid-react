import { useState } from 'react'
import { Stack, Typography } from '@mui/material'
// import { useNavigate } from 'react-router-dom'

import { AuthActions, AuthLogo, EmailAndPass } from 'components'
import {
  AlertModal, Checkbox, SuccessModal,
} from 'layouts'

import { signup } from 'api/auth'

import { formProps, checkboxProps } from './props'

const Signup = ({ user, setUser }) => {
  const { name, email, password } = user
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  // const redirect = useNavigate()

  const handleSubmit = async e => {
    e.preventDefault()
    const { status, msg } = await signup(name, email, password)
    if (status === 'error') {
      setError(msg)
    } else {
      setSuccess(msg)
      // redirect('/')
    }
  }

  const handleChange = e => setUser({ ...user, [e.target.name]: e.target.value })

  return (
    <>
      <AuthLogo />
      <Stack {...formProps} onSubmit={handleSubmit}>
        <Typography variant='h4' color='white' marginX='auto'>Get started today!</Typography>
        <EmailAndPass email={email} pass={password} onChange={handleChange} />
        <Checkbox {...checkboxProps} />
        <AuthActions />
        {error?.length > 0 && <AlertModal info={error} clearError={setError} />}
        {success?.length > 0 && <SuccessModal info={success} clearSuccess={setSuccess} />}
      </Stack>
    </>
  )
}

export default Signup
