import { useState, forwardRef } from 'react'
import {
  Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Stack, Slide, Button,
} from '@mui/material'

const Transition = forwardRef((props, ref) => <Slide direction='down' ref={ref} {...props} />)

const Alert = ({
  title = 'Alert', info = 'Something gone wrong', clearError = null,
}) => {
  const [open, setOpen] = useState(true)
  const handleClose = () => {
    setOpen(false)
    clearError({})
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
        <Button variant='contained' color='warning' onClick={handleClose}>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default Alert
