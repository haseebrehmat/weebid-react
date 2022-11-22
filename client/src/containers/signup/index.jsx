import { useState } from 'react'
import { Stack } from '@mui/material'

import { EmailAndPass } from 'components'
import {
  AlertModal, Button, Checkbox, Input,
} from 'layouts'

import { signup } from 'api/auth'

import styling from './styling'

const Signup = ({ user, setUser }) => {
  const { name, email, password } = user
  const [error, setError] = useState('')

  const handleSubmit = async e => {
    e.preventDefault()
    const { status, msg } = await signup(name, email, password)
    if (status === 'error') setError(msg)
  }

  const handleChange = e => setUser({ ...user, [e.target.name]: e.target.value })

  return (
    <Stack spacing={2} sx={styling} component='form' autoComplete='off' onSubmit={handleSubmit}>
      <Input label='Full Name' value={name} onChange={handleChange} name='name' />
      <EmailAndPass email={email} pass={password} onChange={handleChange} />
      <Checkbox label='Please accept all the terms and conditions!' name='terms' onChange={handleChange} />
      <Button text='Sign Up' type='Submit' />
      {error.length > 0 && <AlertModal info={error} setError={setError} />}
    </Stack>
  )
}

export default Signup
