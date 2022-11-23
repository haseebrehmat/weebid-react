import { useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import { Home, Signin, Signup } from 'containers'
import Protected from './protected'
import Authenticated from './authenticated'

const Router = () => {
  const [user, setUser] = useState({ email: '', password: '' })

  return (
    <Routes>
      <Route path='/' element={<Protected><Home /></Protected>} />
      <Route path='/create-account' element={<Authenticated><Signup user={user} setUser={setUser} /></Authenticated>} />
      <Route path='/login' element={<Authenticated><Signin user={user} setUser={setUser} /></Authenticated>} />
      <Route path='*' element={<Navigate to='/' />} />
    </Routes>
  )
}

export default Router
