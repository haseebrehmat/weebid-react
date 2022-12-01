import { top100Films } from './data'

export const textFieldProps = {
  placeholder: 'Search by name',
  sx: {
    borderBottom: '1px solid #4e4e4e',
    color: 'white',
    fontSize: 20,
    width: 300,
    borderRadius: 0,
    '&.Mui-focused fieldset': {
      border: 'none',
      borderBottom: '1px solid #F8B500 !important',
      boxShadow: '0 0 0 0.25rem rgb(13 110 253 / 25%)',
    },
    '&.MuiOutlinedInput-root': {
      p: 0,
    },
  },
}

export const listBoxProps = {
  sx: {
    minHeight: '100vh !important',
    bgcolor: '#333333',
    color: '#d6d5d5',
    '& :hover': {
      bgcolor: 'blue !important',
    },
  },
}

export const clearIconProps = {
  sx: {
    color: 'rgb(13 110 253)',
  },
}

export const autoCompleteProps = {
  disablePortal: true,
  freeSolo: true,
  id: 'combo-box-demo',
  options: top100Films,
  ListboxProps: listBoxProps,
}
