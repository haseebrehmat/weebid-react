import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  AppBar, Box, Toolbar, Menu, MenuItem, Button, Avatar, Divider, Typography, Stack,
} from '@mui/material'

import { Logo } from 'layouts'
import NavItems from './items'

import { decodeJwt } from 'utils/helpers'
import {
  appbarProps, avatarmenuProps, avatarProps, exploreProps,
  menuProps, rightmenuProps, searchProps, toolbarProps,
} from './props'

import logo from 'assets/slider1.png'
import searchIcon from 'assets/search.png'

const Nav = () => {
  const [anchorEl, setAnchorEl] = useState(null)
  const { user } = decodeJwt()

  const handleMenu = event => setAnchorEl(event.currentTarget)
  const handleClose = () => setAnchorEl(anchorEl ? false : null)

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar {...appbarProps}>
        <Toolbar {...toolbarProps}>
          <Logo />
          <Box {...rightmenuProps}>
            <MenuItem onClick={handleClose} component={Link} to='/' sx={exploreProps}>Explore</MenuItem>
            <MenuItem onClick={handleClose} component={Link} to='/search' sx={exploreProps}>Start a Pitch</MenuItem>
            <MenuItem onClick={handleClose} component={Link} to='/search'>
              <Box component='img' src={searchIcon} {...searchProps} />
            </MenuItem>
            <Button {...avatarmenuProps} onClick={handleMenu}>
              <Typography fontSize='14px' mt='1px'>{user?.name ?? 'Test Name'}</Typography>
              <Avatar {...avatarProps(user?.avatar ?? logo, 'A')} />
            </Button>
            <Menu onClose={handleClose} {...menuProps(anchorEl)}>
              <Stack padding='10px' spacing={2}>
                <NavItems closeMenu={handleClose} />
              </Stack>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
      <Divider color='#666666' />
    </Box>
  )
}

export default Nav
