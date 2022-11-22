import { TextField } from '@mui/material'

const Input = ({
  label = 'Enter', value = null, onChange = null, name, type = 'text', required = true,
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
  />
)

export default Input
