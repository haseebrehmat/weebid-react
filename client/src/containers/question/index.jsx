/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react'
import {
  CardMedia, Grid, Typography, Box, Avatar, Stack, Button, Tabs, Tab,
} from '@mui/material'
import {
  Cancel, Key, MilitaryTech, ChatBubbleOutline, SignalCellularAlt, TaskAlt,
} from '@mui/icons-material'
import image from 'assets/slider5.png'

import { Comments } from 'components'

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
    mb: 2,
    '&:hover': {
      color: 'white',
      bgcolor: '#7B7B7B',
    },
  },
}

const Pitch = () => {
  const [tabIndex, setTabIndex] = useState(0)

  const handleTabChange = (event, newTabIndex) => {
    setTabIndex(newTabIndex)
  }

  return (
    <Grid container>
      <Grid container spacing={2} sx={{ px: 8, my: 5 }}>
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
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
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
      <Grid
        container
        sx={{
          minHeight: '215px',
          display: 'flex',
          placeItems: 'center',
          background: 'linear-gradient(266.84deg, rgba(114, 106, 164, 0.45) 13.49%, rgba(90, 187, 162, 0.45) 100%)',
          color: '#F0F0F0 ',
          p: '1em clamp(1em, 2vw, 3em)',
        }}
      >
        <Grid item sm={12} md={4} p={2}>
          <Stack direction='row' alignItems='center' gap={1}>
            <ChatBubbleOutline sx={{ fontSize: '66px' }} />
            <Typography fontSize='clamp(16px, 2vw, 24px)'> Pitch any idea to your favorite creator</Typography>
          </Stack>
        </Grid>
        <Grid item sm={12} md={4} p={2}>
          <Stack direction='row' alignItems='center' gap={1}>
            <SignalCellularAlt sx={{ fontSize: '66px' }} />
            <Typography fontSize='clamp(16px, 2vw, 24px)'> Make a pledge to help pitches reach their funding goal</Typography>
          </Stack>
        </Grid>
        <Grid item sm={12} md={4} p={2}>
          <Stack direction='row' alignItems='center' gap={1}>
            <TaskAlt sx={{ fontSize: '66px' }} />
            <Typography fontSize='clamp(16px, 2vw, 24px)'> You’re never charged unless a creator fulfills a pitch</Typography>
          </Stack>
        </Grid>
      </Grid>
      <Grid container sx={{ p: '2.5em clamp(2.5em, 2vw, 3em)' }}>
        <Box>
          <Box>
            <Tabs
              value={tabIndex}
              onChange={handleTabChange}
              TabIndicatorProps={{
                sx: {
                  bgcolor: 'white',
                },
              }}
              sx={{
                '& button': {
                  color: '#949292',
                  p: 0,
                  mr: '30px',
                  fontSize: 'clamp(14px, 4vw, 20px)',
                  fontWeight: '700',
                  letterSpacing: '1px',
                },
                '& button.Mui-selected': {
                  color: 'white',
                },
              }}
            >
              <Tab label='Pledges' />
              <Tab label='Comments' />
            </Tabs>
          </Box>
          <Box sx={{ padding: 2 }}>
            {tabIndex === 0 && (
              <Box>
                <Stack spacing={4}>
                  <Box sx={{ display: 'flex', mt: 2, gap: 3 }}>
                    <Avatar alt='Profile' src={image} sx={{ width: 64, height: 64 }} />
                    <Stack>
                      <Typography variant='h6' color='white' fontWeight={700}>
                        Haseeb Rehmat Ali
                      </Typography>
                      <Typography variant='h6' color='#7b7b7b' fontWeight={100}>
                        🏆 Started this pith
                      </Typography>
                    </Stack>
                  </Box>
                  <Box sx={{ display: 'flex', mt: 2, gap: 3 }}>
                    <Avatar alt='Profile' src={image} sx={{ width: 64, height: 64 }} />
                    <Stack>
                      <Typography variant='h6' color='white' fontWeight={700}>
                        Pledged $3
                      </Typography>
                      <Typography variant='h6' color='#7b7b7b' fontWeight={100}>
                        🥇 Ist place contributer
                      </Typography>
                    </Stack>
                  </Box>
                </Stack>
              </Box>
            )}
            {tabIndex === 1 && (
              <Box>
                <Comments />
              </Box>
            )}
          </Box>
        </Box>
      </Grid>
    </Grid>
  )
}

export default Pitch
