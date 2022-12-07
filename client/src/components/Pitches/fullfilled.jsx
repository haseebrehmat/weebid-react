import {
  Card, CardMedia, Typography, Box,
} from '@mui/material'

import ActivePitchActions from './actions'
import PitchDetails from './details'
import { pitchImgProps, fulfilledTagProps } from './props'

import charityIcon from 'assets/charity.png'

const FullfilledPitch = ({ charity = false, pitch }) => (
  <Card sx={{ bgcolor: '#000000c2', mb: 2 }}>
    <Box style={{ position: 'relative' }}>
      <CardMedia {...pitchImgProps(pitch.receiver.avatar, 'Active Pitch')} />
      <Box sx={{ position: 'absolute', top: charity ? '10%' : '80%' }}>
        <Typography {...fulfilledTagProps}>
          ✅ Fullfilled
        </Typography>
        {charity && (
          <Typography {...fulfilledTagProps} mt={1}>
            <Box component='img' src={charityIcon} /> Charity
          </Typography>
        )}
      </Box>
    </Box>
    <PitchDetails msg={pitch.message} id={pitch.id} />
    <ActivePitchActions />
  </Card>
)

export default FullfilledPitch
