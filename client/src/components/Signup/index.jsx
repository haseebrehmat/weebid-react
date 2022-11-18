import { Stack } from '@mui/material'
import { AlertModal, Button, Input } from 'components'
import axios from 'axios'
import { useState } from 'react'
import styling from './styling'

const Signup = ({ user, setUser }) => {
  const { name, email, password } = user
  const [error, setError] = useState('')

  const handleSubmit = async e => {
    e.preventDefault()
    const options = {
      url: 'http://localhost:3001/api/auth/signup',
      method: 'POST',
      headers: {
        Accept: 'application/json',
      },
      data: user,
    }
    await axios(options)
      .then(({ data }) => console.log(data))
      .catch(({ response }) => setError(response.data.message))
  }

  const handleChange = e => setUser({ ...user, [e.target.name]: e.target.value })

  return (
    <Stack spacing={2} sx={styling} component='form' autoComplete='off' onSubmit={handleSubmit}>
      <Input label='Full Name' value={name} onChange={handleChange} name='name' />
      <Input label='Email' value={email} name='email' onChange={handleChange} />
      <Input label='Passowrd' value={password} type='password' name='password' onChange={handleChange} />
      <Button text='Sign Up' type='Submit' />
      {error.length > 0 && <AlertModal info={error} setError={setError} />}
    </Stack>
  )
}

export default Signup
