import { memo } from 'react'
import {
  Typography, Avatar, Box, Stack,
} from '@mui/material'

import image from 'assets/slider5.png'

const PitchUser = memo(() => (
  <>
    <Typography variant='body1' color='#f8b500' fontWeight={700}>
      CONFIRMED PITCH
    </Typography>
    <Box sx={{ display: 'flex', mt: 2, gap: 3 }}>
      <Avatar alt='Profile' src={image} sx={{ width: 64, height: 64 }} />
      <Stack>
        <Typography variant='h6' color='white' fontWeight={700}>
          Haseeb Rehmat Ali
        </Typography>
        <Typography variant='h6' color='#7b7b7b' fontWeight={100}>
          Pitched By Haseeb Rehmat Ali | 11 Pledges
        </Typography>
      </Stack>
    </Box>
  </>
))

export default PitchUser
