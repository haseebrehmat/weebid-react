import { memo } from 'react'
import {
  Box, Stack, Avatar, Typography,
} from '@mui/material'

import image from 'assets/slider5.png'

const Pledges = memo(() => (
  <Box p={2}>
    <Stack spacing={4}>
      <Box sx={{ display: 'flex', mt: 2, gap: 3 }}>
        <Avatar alt='Profile' src={image} sx={{ width: 64, height: 64 }} />
        <Stack>
          <Typography variant='h6' color='white' fontWeight={700}>
            Haseeb Rehmat Ali
          </Typography>
          <Typography variant='h6' color='#7b7b7b' fontWeight={100}>
            🏆 Started this pith
          </Typography>
        </Stack>
      </Box>
      <Box sx={{ display: 'flex', mt: 2, gap: 3 }}>
        <Avatar alt='Profile' src={image} sx={{ width: 64, height: 64 }} />
        <Stack>
          <Typography variant='h6' color='white' fontWeight={700}>
            Pledged $3
          </Typography>
          <Typography variant='h6' color='#7b7b7b' fontWeight={100}>
            🥇 Ist place contributer
          </Typography>
        </Stack>
      </Box>
    </Stack>
  </Box>
))

export default Pledges
