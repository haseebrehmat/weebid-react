import {
  Card, CardMedia, Typography, Box,
} from '@mui/material'

import ActivePitchActions from './actions'
import PitchDetails from './details'
import { pitchImgProps, fulfilledTagProps } from './props'

import image from 'assets/slider5.png'

const FullfilledPitch = ({ charity = false }) => (
  <Card sx={{ bgcolor: '#000000c2', mb: 2 }}>
    <Box style={{ position: 'relative' }}>
      <CardMedia {...pitchImgProps(image, 'Active Pitch')} />
      <Box sx={{ position: 'absolute', top: charity ? '10%' : '80%' }}>
        <Typography {...fulfilledTagProps}>
          ✅ Fullfilled
        </Typography>
        {charity && (
          <Typography {...fulfilledTagProps} mt={1}>
            💌 Charity
          </Typography>
        )}
      </Box>
    </Box>
    <PitchDetails />
    <ActivePitchActions />
  </Card>
)

export default FullfilledPitch
