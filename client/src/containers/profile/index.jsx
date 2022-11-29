import { Grid } from '@mui/material'
import { ProfileImage } from 'components'

const Home = () => (
  <Grid container spacing={2} width='95%' m='auto'>
    <Grid item md={12} lg={4}>
      <ProfileImage />
    </Grid>
    <Grid item md={12} lg={8}>
      <div>Here comes pithes</div>
    </Grid>
  </Grid>
)

export default Home
