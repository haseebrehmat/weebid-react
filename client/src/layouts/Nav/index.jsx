import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  AppBar, Box, Toolbar, Typography, Menu, MenuItem,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import AccountCircle from '@mui/icons-material/AccountCircle'

import { IconBtn, Switch } from 'layouts'

const Nav = () => {
  const [auth, setAuth] = useState(true)
  const [anchorEl, setAnchorEl] = useState(null)

  const handleChange = event => setAuth(event.target.checked)

  const handleMenu = event => setAnchorEl(event.currentTarget)

  const handleClose = () => setAnchorEl(anchorEl ? false : null)

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          <IconBtn
            edge='start'
            aria-label='menu'
            icon={<MenuIcon />}
          />
          <Switch
            label={auth ? 'Logout' : 'Login'}
            checked={auth}
            onChange={handleChange}
          />
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            WeeBID React
          </Typography>
          {auth && (
            <div>
              <IconBtn
                aria-controls='menu-appbar'
                aria-haspopup='true'
                onClick={handleMenu}
                icon={<AccountCircle />}
              />
              <Menu
                id='menu-appbar'
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose} component={Link} to='/create-account'>Sign Up</MenuItem>
                <MenuItem onClick={handleClose} component={Link} to='/login'>Sign In</MenuItem>
                <MenuItem onClick={handleClose} component={Link} to='/'>Home</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Nav
