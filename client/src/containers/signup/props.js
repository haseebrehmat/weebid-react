import { formSx, checkboxSx } from './style'

export const checkboxProps = {
  label: "I agree to Pitch's Terms of Service & Privacy Policy",
  name: 'terms',
  required: true,
  sx: checkboxSx,
}

export const formProps = {
  spacing: 2,
  sx: formSx,
  component: 'form',
  autoComplete: 'off',
}
