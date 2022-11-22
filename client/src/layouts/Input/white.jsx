import { InputLabel, InputBase, FormControl } from '@mui/material'
import { styled } from '@mui/material/styles'

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(3),
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

const WhiteInput = ({
  label = 'Enter', value = null, onChange = null, name, type = 'text', required = true,
}) => (
  <FormControl variant='standard'>
    <InputLabel shrink htmlFor='bootstrap-input' sx={{ fontSize: 20 }}>
      {label}
    </InputLabel>
    <BootstrapInput
      defaultValue={value}
      id='bootstrap-input'
      onChange={onChange}
      name={name}
      type={type}
      required={required}
      sx={{ borderRadius: '100%' }}
    />
  </FormControl>
)

export default WhiteInput
