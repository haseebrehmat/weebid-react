import { IconButton } from '@mui/material'

export default ({
  text = '', type = 'button', color = 'inherit', onClick = null, icon, size = 'large',
}) => (
  <IconButton
    size={size}
    edge='start'
    color={color}
    sx={{ mr: 2 }}
    type={type}
    onClick={onClick}
  >
    {icon}{text}
  </IconButton>
)
