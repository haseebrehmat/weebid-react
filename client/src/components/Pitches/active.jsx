import { Card, CardMedia, Box } from '@mui/material'
import { Link } from 'react-router-dom'
import { calculatePledged } from 'utils/helpers'

import ActivePitchActions from './actions'
import PitchDetails from './details'
import { pitchImgProps } from './props'

const ActivePitch = ({ pitch }) => (
  <Card sx={{ bgcolor: '#000000c2', mb: 2 }}>
    <Box component={Link} to={`user/${pitch.receiver.id}`} textDecoration='none'>
      <CardMedia {...pitchImgProps(pitch.receiver.avatar, pitch.receiver.name)} />
    </Box>
    <PitchDetails msg={pitch.message} id={pitch.id} raised={calculatePledged(pitch.pledges)} pledges={pitch.pledges.length} />
    <ActivePitchActions />
  </Card>
)

export default ActivePitch
