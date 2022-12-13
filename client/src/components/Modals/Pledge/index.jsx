import { memo, useState } from 'react'
import {
  Box, OutlinedInput, FormControl,
} from '@mui/material'

import { BaseModal } from 'components'
import Steppers from './steps'

const amountFieldInput = {
  placeholder: '0 USD',
  sx: {
    color: '#f3f3f3',
    m: 'auto',
    width: 'inherit',
    fontSize: '30px',
    border: '1px solid #686868',
    borderRadius: '10px',
    height: '57px',
  },
  startAdornment: '$',
  autoFocus: true,
}

const pledgeLabelProps = {
  pb: 2,
  pl: 1.1,
  fontWeight: 700,
  fontSize: '16px',
}

const PledgeModal = ({ title = 'Make a Pledge', clearShow = null }) => {
  const [amount, setAmount] = useState(0)

  const handleClick = () => {
    if (amount) console.log(amount)
  }

  const handleChange = e => setAmount(e.target.value)

  return (
    <BaseModal title={title} clearShow={clearShow} handleClick={handleClick} btnText='Proceed to Payment'>
      <Steppers />
      <FormControl sx={{ width: '98%' }}>
        <Box {...pledgeLabelProps}>Pledge Amount</Box>
        <OutlinedInput {...amountFieldInput} value={amount} onChange={handleChange} />
      </FormControl>
    </BaseModal>
  )
}

export default memo(PledgeModal)
