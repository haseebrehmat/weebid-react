import {
  Card, CardMedia, Typography, Box,
} from '@mui/material'

import ActivePitchActions from './actions'
import PitchDetails from './details'
import { pitchImgProps, fulfilledTagProps } from './props'

import image from 'assets/slider5.png'

export default function FullfilledPitch() {
  return (
    <Card sx={{ bgcolor: '#000000c2', mb: 2 }}>
      <Box style={{ position: 'relative' }}>
        <CardMedia {...pitchImgProps(image, 'Active Pitch')} />
        <Box sx={{ position: 'absolute', top: '80%' }}>
          <Typography {...fulfilledTagProps}>
            ✅ Fullfilled
          </Typography>
        </Box>
      </Box>
      <PitchDetails />
      <ActivePitchActions />
    </Card>
  )
}
