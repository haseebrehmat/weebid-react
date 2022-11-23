import { useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import { Home, Signin, Signup } from 'containers'

const Router = () => {
  const [user, setUser] = useState({ email: '', password: '' })

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/create-account' element={<Signup user={user} setUser={setUser} />} />
      <Route path='/login' element={<Signin user={user} setUser={setUser} />} />
      <Route path='*' element={<Navigate to='/' />} />
    </Routes>
  )
}

export default Router
