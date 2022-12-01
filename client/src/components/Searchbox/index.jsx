import { Autocomplete, TextField } from '@mui/material'
import { Clear } from '@mui/icons-material'

import { autoCompleteProps, textFieldProps, clearIconProps } from './props'

export default function Searchbox() {
  return (
    <Autocomplete
      {...autoCompleteProps}
      clearIcon={<Clear {...clearIconProps} />}
      renderInput={(params) => {
        const { placeholder, sx } = textFieldProps
        params.InputProps.placeholder = placeholder
        params.InputProps.sx = sx
        return (<TextField {...params} />)
      }}
    />
  )
}
