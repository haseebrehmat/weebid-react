import { Box, Stack } from '@mui/material'
import { Banners, ProfilePitches } from 'components'

const Home = () => (
  <Stack spacing={2}>
    <Banners />
    <Box px={10}>
      <ProfilePitches />
    </Box>
  </Stack>
)

export default Home
