import { useNavigate } from 'react-router-dom'
import { MenuItem } from '@mui/material'

import { removeToken } from 'utils/helpers'

const Logout = ({ closeMenu }) => {
  const redirect = useNavigate()

  const logout = () => {
    closeMenu()
    removeToken()
    redirect('/login')
  }

  return <MenuItem onClick={logout}>Logout</MenuItem>
}

export default Logout
