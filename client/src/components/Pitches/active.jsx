import { Card, CardMedia } from '@mui/material'

import ActivePitchActions from './actions'
import PitchDetails from './details'
import { pitchImgProps } from './props'

const ActivePitch = ({ pitch }) => (
  <Card sx={{ bgcolor: '#000000c2', mb: 2 }}>
    <CardMedia {...pitchImgProps(pitch.receiver.avatar, pitch.receiver.name)} />
    <PitchDetails msg={pitch.message} id={pitch.id} />
    <ActivePitchActions />
  </Card>
)

export default ActivePitch
