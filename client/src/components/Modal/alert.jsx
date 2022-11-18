import {
  Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Stack,
} from '@mui/material'
import { useState } from 'react'
import { Button } from 'components'

const Alert = ({
  title = 'Alert', info = 'Something gone wrong', setError = null,
}) => {
  const [open, setOpen] = useState(true)
  const handleClose = () => {
    setOpen(false)
    setError({})
  }

  return (
    <Dialog
      open={open}
      onClose={handleClose}
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
        <Button text='Close' onClick={handleClose} />
      </DialogActions>
    </Dialog>
  )
}

export default Alert
