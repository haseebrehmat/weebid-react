import { Grid } from '@mui/material'

import { ProfileImage, ProfilePitches } from 'components'

const Profile = () => (
  <Grid container spacing={2} width='95%' m='auto'>
    <Grid item md={12} lg={4}>
      <ProfileImage />
    </Grid>
    <Grid item md={12} lg={8}>
      <ProfilePitches />
    </Grid>
  </Grid>
)

export default Profile
