import React, { memo } from 'react'
import { Box, Skeleton } from '@mui/material'

export default memo(() => (
  <Box display='flex' gap={1}>
    <Skeleton
      sx={{ bgcolor: 'grey.900' }}
      variant='rectangular'
      width='25%'
      height={300}
    />
    <Skeleton
      sx={{ bgcolor: 'grey.900' }}
      variant='rectangular'
      width='25%'
      height={300}
    />
    <Skeleton
      sx={{ bgcolor: 'grey.900' }}
      variant='rectangular'
      width='25%'
      height={300}
    />
    <Skeleton
      sx={{ bgcolor: 'grey.900' }}
      variant='rectangular'
      width='25%'
      height={300}
    />
  </Box>
))
