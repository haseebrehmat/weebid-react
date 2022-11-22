import { Button } from '@mui/material'

export default ({
  text = 'Click', type = 'button', color = 'warning', onClick = null,
}) => (
  <Button color={color} variant='contained' type={type} onClick={onClick} sx={{ width: '100%', padding: 2, borderRadius: 2 }}>
    {text}
  </Button>
)
