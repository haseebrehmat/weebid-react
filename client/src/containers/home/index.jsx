import { Box, Stack } from '@mui/material'
import { Banners, ProfilePitches } from 'components'

const Home = () => (
  <Stack spacing={2}>
    <Banners />
    <Box px={{ md: 10, sm: 3 }}>
      <ProfilePitches />
    </Box>
  </Stack>
)

export default Home
