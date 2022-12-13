import { useState } from 'react'
import {
  Box, Stepper, Step, StepButton,
} from '@mui/material'

const steps = ['Pledge', 'Payment', 'Confirm']

export default function Steppers() {
  const [activeStep, setActiveStep] = useState(0)
  const [completed, setCompleted] = useState({ 0: false, 1: false, 2: false })

  const handleStep = (step) => () => {
    setActiveStep(step)
    setCompleted(flags => ({ ...flags, [step]: true }))
  }

  return (
    <Box sx={{ width: '100%', mb: 4, mt: 2 }}>
      <Stepper nonLinear activeStep={activeStep} alternativeLabel>
        {steps.map((label, index) => (
          <Step key={label} completed={completed[index + 1]}>
            <StepButton color='inherit' onClick={handleStep(index)}>
              <Box color='#7B7B7B'>{label}</Box>
            </StepButton>
          </Step>
        ))}
      </Stepper>
    </Box>
  )
}
