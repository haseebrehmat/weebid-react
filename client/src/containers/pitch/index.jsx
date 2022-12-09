/* eslint-disable react/no-unescaped-entities */
import {
  CardMedia, Grid, Typography,
} from '@mui/material'
import image from 'assets/slider5.png'

import {
  PitchBanner, PitchUser, PledgesAndComments, PitchActions,
} from 'components'

const imageProps = img => ({
  image: img,
  style: {
    height: 'clamp(400px, 35vw, 600px)',
  },
  component: 'img',
  title: 'Profile Image',
  alt: 'Profile Image',
})

const Pitch = () => (
  <Grid container>
    <Grid container spacing={2} sx={{ px: 8, my: 5 }}>
      <Grid item md={6}>
        <CardMedia {...imageProps(image)} />
      </Grid>
      <Grid item md={6}>
        <PitchUser />
        <Typography color='#d9d9d9' mt={3} fontSize='clamp(20px, 2vw, 36px)' lineHeight='clamp(32px, 3vw, 46px)'>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </Typography>
        <Typography color='#5ABBA2' mt={3} fontSize='20px'>
          $3 USD Pledged
        </Typography>
        <PitchActions />
      </Grid>
    </Grid>
    <PitchBanner />
    <PledgesAndComments />
  </Grid>
)

export default Pitch
