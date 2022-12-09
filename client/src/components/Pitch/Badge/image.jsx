import { Box } from '@mui/material'

import { shapeStyles } from './props'

import image from 'assets/slider5.png'

const PitchBadgeImage = (
  <Box component='img' sx={{ ...shapeStyles }} src={image} />
)

export default PitchBadgeImage
