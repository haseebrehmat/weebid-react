import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Stack, Typography, Box } from '@mui/material'

import { EmailAndPass, AuthActions } from 'components'
import { AlertModal } from 'layouts'

import { signin } from 'api/auth'

import logo from 'assets/logo.png'
import { formSx, forgotSx, logoSx } from './style'

const Signup = ({ user, setUser }) => {
  const redirect = useNavigate()
  const [error, setError] = useState('')
  const { email, password } = user

  const handleSubmit = async e => {
    e.preventDefault()
    const { status, msg, data } = await signin(email, password)
    if (status === 'error') {
      setError(msg)
    } else {
      redirect('/', { state: data })
    }
  }

  const handleChange = e => setUser({ ...user, [e.target.name]: e.target.value })

  return (
    <>
      <Box display='flex' alignItems='center' justifyContent='center' mt='90px'>
        <Box component='img' sx={logoSx} alt='Logo' src={logo} />
      </Box>
      <Stack spacing={2} sx={formSx} component='form' autoComplete='off' onSubmit={handleSubmit}>
        <Typography variant='h4' color='white' marginX='auto'>Log in to your account</Typography>
        <EmailAndPass email={email} pass={password} onChange={handleChange} />
        <Typography sx={forgotSx}>Forgot Password?</Typography>
        <AuthActions login />
        {error.length > 0 && <AlertModal info={error} setError={setError} />}
      </Stack>
    </>
  )
}

export default Signup
