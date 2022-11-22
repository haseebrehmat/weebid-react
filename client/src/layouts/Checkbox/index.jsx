import { FormControlLabel, Checkbox } from '@mui/material'

export default ({
  label = 'Approve', required = true, checked = false, onChange = null, name,
}) => (
  <FormControlLabel
    control={
      <Checkbox
        defaultChecked={checked}
        onChange={onChange}
        required={required}
        name={name}
        color='warning'
        sx={{ marginLeft: -1 }}
      />
    }
    label={label}
  />
)
