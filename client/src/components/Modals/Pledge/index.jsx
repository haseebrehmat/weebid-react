import { memo, useState } from 'react'
import {
  Box, OutlinedInput, FormControl, Stepper, Step, StepButton, Button, Typography,
} from '@mui/material'
import { useMutation } from 'react-query'

import { BaseModal } from 'components'
import { getMsg, id } from 'utils/helpers'
import { createBid } from 'api/bid'
import { proceedBtnProps } from './props'

import pledgeSuccess from 'assets/pledge-success.png'
import { queryClient } from 'utils/clients'

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

const steps = ['Pledge', 'Payment', 'Confirm']

const PledgeModal = ({ title = 'Make a Pledge', clearShow = null, questionId }) => {
  const [activeStep, setActiveStep] = useState(0)
  const [completed, setCompleted] = useState({ 0: false, 1: false, 2: false })
  const [amount, setAmount] = useState(0)
  const {
    mutate, isError, error, data,
  } = useMutation(createBid, {
    onSuccess: () => {
      setActiveStep(2)
      queryClient.invalidateQueries('question', questionId)
    },
  })
  const userId = id()

  const handleClick = () => mutate({ cents: amount, questionId, userId })

  const handleStep = (step) => () => {
    setActiveStep(step)
    setCompleted(flags => ({ ...flags, [step]: true }))
  }

  const handleChange = e => setAmount(e.target.value)

  const proceedBtn = <Button onClick={handleClick} {...proceedBtnProps}>Proceed to payment</Button>

  return (
    <BaseModal title={activeStep !== 2 && title} clearShow={clearShow} btn={activeStep === 0 && proceedBtn}>
      {activeStep === 0 && (<Box sx={{ width: '100%', mb: 4, mt: 2 }}>
        <Stepper nonLinear activeStep={activeStep} alternativeLabel>
          {steps.map((label, index) => (
            <Step key={label} completed={completed[index + 1]}>
              <StepButton color='inherit' onClick={handleStep(index)}>
                <Box color='#7B7B7B'>{label}</Box>
              </StepButton>
            </Step>
          ))}
        </Stepper>
      </Box>)}
      {activeStep === 0 && (
        <FormControl sx={{ width: '98%' }}>
          <Box {...pledgeLabelProps}>Pledge Amount</Box>
          <OutlinedInput {...amountFieldInput} value={amount} onChange={handleChange} />
          {isError ? <Box component='span' color='#686868' mt={2} mx={1}>{getMsg(error)}</Box> : null}
        </FormControl>
      )}
      {activeStep === 1 && (
        <Box>Hello World</Box>
      )}
      {activeStep === 2 && (
        <Box sx={{ width: '98%', textAlign: 'center' }}>
          <Box component='img' src={pledgeSuccess} width='90%' />
          <Typography variant='body1' color='white'>{data.msg}</Typography>
        </Box>
      )}
    </BaseModal>
  )
}

export default memo(PledgeModal)
