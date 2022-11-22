import { useState } from 'react'
import {
  Stack, Typography, Box,
} from '@mui/material'
import { useNavigate } from 'react-router-dom'

import { EmailAndPass } from 'components'
import { AlertModal, Button } from 'layouts'

import { signin } from 'api/auth'

import logo from 'assets/logo.png'
import styling from './styling'

const Signup = ({ user, setUser }) => {
  const { email, password } = user
  const [error, setError] = useState('')
  const redirect = useNavigate()

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
      <Box display='flex' alignItems='center' justifyContent='center' mt='80px'>
        <Box component='img' sx={{ height: 45, width: 145 }} alt='Logo' src={logo} />
      </Box>
      <Stack spacing={3} sx={styling} component='form' autoComplete='off' onSubmit={handleSubmit}>
        <Typography variant='h5' color='white' marginX='auto'>Log in to your account</Typography>
        <EmailAndPass email={email} pass={password} onChange={handleChange} />
        <Typography fontSize='15px' color='white' align='right'>Forgot Password?</Typography>
        <Button text='Sign In' type='Submit' />
        <Typography fontSize='13px' color='grey' align='center' marginY='0'>-OR-</Typography>
        <Button text='Sign In with Google' color='grey' />
        <Button text='Sign In with Facebook' color='primary' />
        {error.length > 0 && <AlertModal info={error} setError={setError} />}
      </Stack>
    </>
  )
}

export default Signup
