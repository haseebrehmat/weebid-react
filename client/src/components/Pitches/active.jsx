import { Card, CardMedia } from '@mui/material'

import ActivePitchActions from './actions'
import PitchDetails from './details'
import { pitchImgProps } from './props'

import image from 'assets/slider5.png'

const ActivePitch = () => (
  <Card sx={{ bgcolor: '#000000c2', mb: 2 }}>
    <CardMedia {...pitchImgProps(image, 'Active Pitch')} />
    <PitchDetails />
    <ActivePitchActions />
  </Card>
)

export default ActivePitch
