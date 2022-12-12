import { memo } from 'react'
import { Box } from '@mui/material'

import { BaseModal } from 'components'

const PledgeModal = ({ title = 'Make a Pledge' }) => (
  <BaseModal title={title}>
    <Box>
      Hello World
    </Box>
  </BaseModal>
)

export default memo(PledgeModal)
