import { memo } from 'react'
import {
  Box, Stack, Avatar, Typography,
} from '@mui/material'
import { getOrdinal } from 'utils/helpers'

const Pledges = memo(({ pledges, pitchBy }) => (
  <Box p={2}>
    <Stack spacing={4}>
      <Box sx={{ display: 'flex', mt: 2, gap: 3 }}>
        <Avatar alt='Profile' src={pitchBy.avatar} sx={{ width: 64, height: 64 }} />
        <Stack>
          <Typography variant='h6' color='white' fontWeight={700}>
            {pitchBy.name}
          </Typography>
          <Typography variant='h6' color='#7b7b7b' fontWeight={100}>
            🏆 Started this pith
          </Typography>
        </Stack>
      </Box>
      {pledges.map((pledge, index) => (
        <Box sx={{ display: 'flex', mt: 2, gap: 3 }} key={index}>
          <Avatar alt='Profile' src={pledge.user.avatar} sx={{ width: 64, height: 64 }} />
          <Stack>
            <Typography variant='h6' color='white' fontWeight={700}>
              Pledged ${pledge.cents}
            </Typography>
            <Typography variant='h6' color='#7b7b7b' fontWeight={100}>
              😍 {getOrdinal(index + 1)} place contributer
            </Typography>
          </Stack>
        </Box>
      ))}
    </Stack>
  </Box>
))

export default Pledges
