import { FormControl, InputLabel, InputBase } from '@mui/material'
import { styled } from '@mui/material/styles'

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(4),
  },
  '& .MuiInputBase-input': {
    borderRadius: '8px',
    backgroundColor: 'white',
    border: '1px solid #313131',
    fontSize: 16,
    width: '100%',
    padding: '10px 12px',
  },
}))

const labelSx = {
  fontSize: 20,
  color: 'white',
  '&': {
    color: 'white !important',
  },
}

const Input = ({
  label, value, name, onChange, type, required = true, sx,
}) => (
  <FormControl variant='standard' sx={sx}>
    <InputLabel shrink htmlFor='input' sx={labelSx}>
      {label}
    </InputLabel>
    <BootstrapInput
      name={name}
      defaultValue={value}
      id='input'
      onChange={onChange}
      type={type}
      required={required}
      sx={{ borderRadius: '100%' }}
    />
  </FormControl>
)

export default Input
