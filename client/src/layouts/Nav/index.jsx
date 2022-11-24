import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  AppBar, Box, Toolbar, Typography, Menu, MenuItem, IconButton,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import AccountCircle from '@mui/icons-material/AccountCircle'

import { Logout } from 'components'

const Nav = () => {
  const [anchorEl, setAnchorEl] = useState(null)

  const handleMenu = event => setAnchorEl(event.currentTarget)

  const handleClose = () => setAnchorEl(anchorEl ? false : null)

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          <IconButton aria-label='menu' edge='start'>
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            WeeBID React
          </Typography>
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
            <MenuItem onClick={handleClose} component={Link} to='/'>Home</MenuItem>
            <Logout closeMenu={handleClose} />
          </Menu>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Nav
