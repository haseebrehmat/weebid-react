import { useState, forwardRef, memo } from 'react'
import {
  Dialog, DialogTitle, DialogContent, DialogActions, Stack, Slide, Button, Divider,
} from '@mui/material'

import {
  dialogActionsProps, dialogProps, actionBtnProps, dividerProps, cancelBtnProps,
} from './props'
import './style.css'

const Transition = forwardRef((props, ref) => <Slide direction='down' ref={ref} {...props} />)

const BaseModal = ({
  children, title, clearError = null, clearSuccess = null, btnText = 'Close', handleClick = null,
}) => {
  const [open, setOpen] = useState(true)
  const handleClose = () => {
    setOpen(false)
    if (clearError) clearError(null)
    if (clearSuccess) clearSuccess(null)
  }

  return (
    <Dialog open={open} onClose={handleClose} {...dialogProps(Transition)}>
      <Stack sx={{ alignItems: 'center' }}>
        <DialogTitle variant='h5'>{title}</DialogTitle>
        <DialogContent>{children}</DialogContent>
      </Stack>
      <DialogActions {...dialogActionsProps}>
        <Button onClick={handleClick || handleClose} {...actionBtnProps}>{btnText}</Button>
        <Divider {...dividerProps} />
        <Button onClick={handleClose} {...cancelBtnProps}>Cancel</Button>
      </DialogActions>
    </Dialog>
  )
}

export default memo(BaseModal)
