import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  AppBar, Box, Toolbar, Menu, MenuItem, Button, Avatar, Divider, Typography, Stack,
} from '@mui/material'

import { Logo } from 'layouts'

import searchIcon from 'assets/search.png'
import NavItems from './items'
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
