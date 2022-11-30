import {
  Box, Typography, TextField, Button,
} from '@mui/material'

import { PitchBadge } from 'components'

import {
  mainBoxProps, pitchTextareaProps, sendPitchBtnProps,
  whatsYourPitchProps, pitchForProps, influencerNameProps,
} from './props'

const Ask = () => (
  <Box {...mainBoxProps}>
    <Typography {...whatsYourPitchProps}>What`s your pitch?</Typography>
    <PitchBadge />
    <Typography {...pitchForProps}>Pitch for<Typography {...influencerNameProps}>Haseeb Rehmat ALi</Typography></Typography>
    <TextField {...pitchTextareaProps} />
    <Button {...sendPitchBtnProps}>Send Pitch</Button>
  </Box>
)

export default Ask
