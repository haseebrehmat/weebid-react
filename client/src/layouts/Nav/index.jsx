import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  AppBar, Box, Toolbar, Typography, Menu, MenuItem, IconButton,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import AccountCircle from '@mui/icons-material/AccountCircle'

import { Switch } from 'layouts'

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
          <IconButton aria-label='menu' edge='start'>
            <MenuIcon />
          </IconButton>
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
              <IconButton aria-label='menu-appbar' onClick={handleMenu} aria-haspopup='true'>
                <AccountCircle />
              </IconButton>
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
