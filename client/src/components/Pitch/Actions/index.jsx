import { memo } from 'react'
import { Box, Button } from '@mui/material'
import { Cancel, Key, MilitaryTech } from '@mui/icons-material'

import { actionBtnProps, makePledgeBtnProps } from './props'

const PitchActions = memo(() => (
  <>
    <Box mt={2}>
      <Button {...actionBtnProps} startIcon={<Cancel />}>
        Set as Goal
      </Button>
      <Button {...actionBtnProps} startIcon={<Key />}>
        Add Innicative
      </Button>
      <Button {...actionBtnProps} startIcon={<MilitaryTech />}>
        Donate
      </Button>
    </Box>
    <Button {...makePledgeBtnProps}>
      Make a Pledge
    </Button>
  </>
))

export default PitchActions
