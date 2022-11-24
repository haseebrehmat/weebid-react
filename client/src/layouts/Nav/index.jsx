import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  AppBar, Box, Toolbar, Menu, MenuItem, Button, Avatar, Divider, Typography,
} from '@mui/material'

import { Logout } from 'components'
import { Logo } from 'layouts'

import searchIcon from 'assets/search.png'
import {
  appbarProps, avatarmenuProps, avatarProps,
  menuProps, rightmenuProps, searchProps, toolbarProps,
} from './props'

const Nav = () => {
  const [anchorEl, setAnchorEl] = useState(null)

  const handleMenu = event => setAnchorEl(event.currentTarget)
  const handleClose = () => setAnchorEl(anchorEl ? false : null)

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar {...appbarProps}>
        <Toolbar {...toolbarProps}>
          <Logo />
          <Box {...rightmenuProps}>
            <MenuItem onClick={handleClose} component={Link} to='/'>Explore</MenuItem>
            <MenuItem onClick={handleClose} component={Link} to='/'>Start a Pitch</MenuItem>
            <Box component='img' src={searchIcon} {...searchProps} />
            <Button {...avatarmenuProps} onClick={handleMenu}>
              <Typography fontSize='14px' mt='1px'>Usman Asif</Typography>
              <Avatar {...avatarProps(searchIcon, 'A')} />
            </Button>
            <Menu onClose={handleClose} {...menuProps(anchorEl)}>
              <MenuItem onClick={handleClose} component={Link} to='/'>Home</MenuItem>
              <Logout closeMenu={handleClose} />
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
      <Divider color='#666666' />
    </Box>
  )
}

export default Nav
