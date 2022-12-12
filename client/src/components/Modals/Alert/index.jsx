import { memo } from 'react'
import { DialogContentText } from '@mui/material'

import { BaseModal } from 'components'

const AlertModal = ({
  title = 'Alert', info = 'Something gone wrong', clearError = null,
}) => (
  <BaseModal title={title} clearError={clearError} btnText='Ok'>
    <DialogContentText id='alert-dialog-slide-description' color='white' fontSize={16}>{info}</DialogContentText>
  </BaseModal>
)

export default memo(AlertModal)
