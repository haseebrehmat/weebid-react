import { Box, CircularProgress } from '@mui/material'

export default function CircularIndeterminate() {
  return (
    <Box
      display='flex'
      justifyContent='center'
      alignItems='center'
      minHeight='100vh'
    >
      <CircularProgress color='warning' />
    </Box>
  )
}
