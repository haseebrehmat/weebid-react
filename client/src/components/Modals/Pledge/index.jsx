import { memo, useState } from 'react'
import {
  OutlinedInput, FormControl,
} from '@mui/material'

import { BaseModal } from 'components'

const PledgeModal = ({ title = 'Make a Pledge', clearShow = null }) => {
  const [amount, setAmount] = useState(0)

  const handleClick = () => {
    if (amount) setAmount(120)
  }

  return (
    <BaseModal title={title} clearShow={clearShow} handleClick={handleClick}>
      <FormControl sx={{ width: '98%' }}>
        <OutlinedInput
          placeholder='0'
          sx={{
            color: '#f3f3f3',
            m: 'auto',
            width: 'inherit',
            fontSize: '30px',
            border: '1px solid #686868',
            borderRadius: '10px',
            height: '60px',
          }}
          startAdornment='$'
          value={amount}
          onChange={e => setAmount(e.target.value)}
        />
      </FormControl>
    </BaseModal>
  )
}

export default memo(PledgeModal)
