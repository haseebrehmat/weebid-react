import { Box } from '@mui/material'
import { memo } from 'react'

import empty from 'assets/no_pitch.png'

const Placeholder = memo(() => (
  <Box
    sx={{
      textAlign: 'center',
      mt: {
        md: '100px',
        sm: '30px',
      },
    }}
  >
    <Box component='img' src={empty} />
  </Box>
))

export default Placeholder
