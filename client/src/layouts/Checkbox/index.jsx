import { FormControlLabel, Checkbox, FormGroup } from '@mui/material'

export default ({
  label = 'Approve', required = false, checked = false, onChange = null, name, sx,
}) => (
  <FormGroup>
    <FormControlLabel
      control={
        <Checkbox
          defaultChecked={checked}
          onChange={onChange}
          required={required}
          name={name}
          color='warning'
          sx={sx}
          // sx={{ marginLeft: -1 }}
        />
      }
      label={label}
    />
  </FormGroup>
)
