import { memo } from 'react'
import { Link } from 'react-router-dom'
import { Divider, MenuItem } from '@mui/material'
import {
  Person, EmojiObjectsOutlined, VolunteerActivism, Wallet, HistoryEdu, QuestionMark,
} from '@mui/icons-material'

import { Logout } from 'components'

const iconProps = {
  fontSize: 'small',
  sx: {
    mr: '15px',
    mb: '4px',
  },
}

const sx = {
  color: '#D6D5D5',
  padding: '.4rem 1rem',
  '&:hover': {
    bgcolor: '#e9ecef',
    color: '#1e2125',
  },
}

const Items = memo(({ closeMenu }) => [
  <MenuItem onClick={closeMenu} component={Link} to='/' sx={sx}><Person {...iconProps} />Profile</MenuItem>,
  <MenuItem onClick={closeMenu} component={Link} to='/' sx={sx}><EmojiObjectsOutlined {...iconProps} />My Pitches</MenuItem>,
  <MenuItem onClick={closeMenu} component={Link} to='/' sx={sx}><VolunteerActivism {...iconProps} />My Pledged</MenuItem>,
  <MenuItem onClick={closeMenu} component={Link} to='/' sx={sx}><Wallet {...iconProps} />Wallet</MenuItem>,
  <MenuItem onClick={closeMenu} component={Link} to='/' sx={sx}><HistoryEdu {...iconProps} />Terms</MenuItem>,
  <MenuItem onClick={closeMenu} component={Link} to='/' sx={sx}><QuestionMark {...iconProps} />Help</MenuItem>,
  <Divider color='#666666' />,
  <Logout closeMenu={closeMenu} btnSx={sx} iconProps={iconProps} />,
])

export default Items
