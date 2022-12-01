import { useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import {
  Home, Signin, Signup, Profile, Ask, Explore,
} from 'containers'

import Protected from './protected'
import Authenticated from './authenticated'

const Main = () => {
  const [user, setUser] = useState({ email: '', password: '' })

  return (
    <Routes>
      <Route path='/' element={<Protected><Home /></Protected>} />
      <Route path='/profile' element={<Protected><Profile /></Protected>} />
      <Route path='/search' element={<Protected><Explore /></Protected>} />
      <Route path='/ask/user/:id' element={<Protected><Ask /></Protected>} />
      <Route path='/create-account' element={<Authenticated><Signup user={user} setUser={setUser} /></Authenticated>} />
      <Route path='/login' element={<Authenticated><Signin user={user} setUser={setUser} /></Authenticated>} />
      <Route path='*' element={<Navigate to='/' />} />
    </Routes>
  )
}

export default Main
