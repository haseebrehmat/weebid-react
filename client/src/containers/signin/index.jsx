import { useState } from 'react'
import { Stack } from '@mui/material'

import { EmailAndPass } from 'components'
import { AlertModal, Button } from 'layouts'

import { signin } from 'api/auth'

import styling from './styling'

const Signup = ({ user, setUser }) => {
  const { email, password } = user
  const [error, setError] = useState('')

  const handleSubmit = async e => {
    e.preventDefault()
    const { status, msg } = await signin(email, password)
    if (status === 'error') setError(msg)
  }

  const handleChange = e => setUser({ ...user, [e.target.name]: e.target.value })

  return (
    <Stack spacing={2} sx={styling} component='form' autoComplete='off' onSubmit={handleSubmit}>
      <EmailAndPass email={email} pass={password} onChange={handleChange} />
      <Button text='Sign In' type='Submit' />
      {error.length > 0 && <AlertModal info={error} setError={setError} />}
    </Stack>
  )
}

export default Signup
