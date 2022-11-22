import {
  Switch, FormGroup, FormControlLabel,
} from '@mui/material'

export default ({ checked = false, onChange = null, label = '' }) => (
  <FormGroup>
    <FormControlLabel
      control={
        <Switch
          checked={checked}
          onChange={onChange}
        />
      }
      label={label}
    />
  </FormGroup>
)
