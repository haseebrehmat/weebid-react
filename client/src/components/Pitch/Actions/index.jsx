import { memo, useState } from 'react'
import { Box, Button } from '@mui/material'
import { Cancel, Key, MilitaryTech } from '@mui/icons-material'

import { PledgeModal } from 'components'

import { actionBtnProps, makePledgeBtnProps } from './props'

const PitchActions = ({ id, pledge = null }) => {
  const [pledgeModal, setPledgeModal] = useState(false)
  console.log(pledge)

  return (
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
      <Button {...makePledgeBtnProps} onClick={() => setPledgeModal(true)}>
        Make a Pledge
      </Button>
      {pledgeModal ? <PledgeModal clearShow={setPledgeModal} questionId={id} userPledge={pledge} /> : null}
    </>
  )
}

export default memo(PitchActions)
