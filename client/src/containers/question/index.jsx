/* eslint-disable react/no-unescaped-entities */
import {
  CardMedia, Grid, Typography, Box, Avatar, Stack, Button,
} from '@mui/material'
import { Cancel, Key, MilitaryTech } from '@mui/icons-material'
import image from 'assets/slider5.png'

const imageProps = img => ({
  image: img,
  style: {
    height: 'clamp(400px, 35vw, 600px)',
  },
  component: 'img',
  title: 'Profile Image',
  alt: 'Profile Image',
})

const likeBtnProps = {
  sx: {
    border: '1px solid #8e8d8d',
    borderRadius: '24px',
    color: '#8e8d8d',
    height: '46px',
    minWidth: '46px',
    px: 2,
    mr: 2,
    '&:hover': {
      color: 'white',
      bgcolor: '#7B7B7B',
    },
  },
}

const Pitch = () => {
  const lg = console.log
  lg('12')
  return (
    <Grid container spacing={2} sx={{ mt: 5, px: 8 }}>
      <Grid item md={6}>
        <CardMedia {...imageProps(image)} />
      </Grid>
      <Grid item md={6}>
        <Typography variant='body1' color='#f8b500' fontWeight={700}>
          CONFIRMED PITCH
        </Typography>
        <Box sx={{ display: 'flex', mt: 2, gap: 3 }}>
          <Avatar alt='Profile' src={image} sx={{ width: 64, height: 64 }} />
          <Stack>
            <Typography variant='h6' color='white' fontWeight={700}>
              Haseeb Rehmat Ali
            </Typography>
            <Typography variant='h6' color='#7b7b7b' fontWeight={100}>
              Pitched By Haseeb Rehmat Ali | 11 Pledges
            </Typography>
          </Stack>
        </Box>
        <Typography color='#d9d9d9' mt={3} fontSize='clamp(20px, 2vw, 36px)' lineHeight='clamp(32px, 3vw, 46px)'>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </Typography>
        <Typography color='#5ABBA2' mt={3} fontSize='20px'>
          $3 USD Pledged
        </Typography>
        <Box mt={2}>
          <Button {...likeBtnProps} startIcon={<Cancel />}>
            Set as Goal
          </Button>
          <Button {...likeBtnProps} startIcon={<Key />}>
            Add Innicative
          </Button>
          <Button {...likeBtnProps} startIcon={<MilitaryTech />}>
            Donate
          </Button>
        </Box>
        <Button
          id='theme-btn-bold'
          sx={{
            borderRadius: '8px',
            px: 5,
            py: 1.5,
            mt: 3,
            '&:hover': {
              bgcolor: '#131313 !important',
              border: '1px solid #f8b500',
            },
          }}
        >
          Make a Pledge
        </Button>
      </Grid>
    </Grid>
  )
}

export default Pitch
