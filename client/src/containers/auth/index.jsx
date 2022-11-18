import { useState } from 'react'
import { Signin, Signup } from 'components'

const Auth = () => {
  const [user, setUser] = useState({ name: '', email: '', password: '' })

  return (
    <div>
      <Signin user={user} setUser={setUser} />
      <Signup user={user} setUser={setUser} />
    </div>
  )
}
export default Auth
