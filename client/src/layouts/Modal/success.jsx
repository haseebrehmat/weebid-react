import { useState, forwardRef } from 'react'
import {
  Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Stack, Slide,
} from '@mui/material'

import { Button } from 'layouts'

const Transition = forwardRef((props, ref) => <Slide direction='left' ref={ref} {...props} />)

const Alert = ({
  title = 'Success', info = 'Congratulations', clearSuccess = null,
}) => {
  const [open, setOpen] = useState(true)
  const handleClose = () => {
    setOpen(false)
    clearSuccess({})
  }

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      TransitionComponent={Transition}
      keepMounted
      aria-describedby='alert-dialog-slide-description'
      fullWidth
      maxWidth='xs'
    >
      <Stack sx={{ alignItems: 'center' }}>
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-slide-description'>
            {info}
          </DialogContentText>
        </DialogContent>
      </Stack>
      <DialogActions>
        <Button text='Cancel' onClick={handleClose} />
      </DialogActions>
    </Dialog>
  )
}

export default Alert
