import { TextField } from '@mui/material'

const Input = ({
  label = 'Label', value = null, onChange = null, name, type = 'text', required = true, msg = '',
}) => (
  <TextField
    label={label}
    variant='outlined'
    color='warning'
    value={value}
    onChange={onChange}
    name={name}
    type={type}
    required={required}
    error={msg.length > 0}
    helperText={msg}
  />
)

export default Input
