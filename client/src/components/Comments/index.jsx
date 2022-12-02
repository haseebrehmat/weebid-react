import { memo } from 'react'
import {
  Box, Typography, Avatar, Stack, FormControl, OutlinedInput,
} from '@mui/material'

import image from 'assets/slider1.png'

const Unit = () => (
  <Box sx={{ display: 'inline-flex' }}>
    <Avatar alt='Commentor' src={image} />
    <Typography variant='body1' sx={{ lineHeight: 1.2, ml: 2 }}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Typography fontWeight={700} color='white' letterSpacing={1.5}>Haseeb Rehmat Ali</Typography>
        <Box fontSize={12} ml={2}>6 months ago</Box>
      </Box>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
    </Typography>
  </Box>
)

const Comments = memo(() => (
  <Box sx={{
    bgcolor: '#242424', borderRadius: '20px', color: '#cac7c7', width: '100%',
  }}
  >
    <Box sx={{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      p: '20px 30px',
    }}
    >
      <Typography variant='body1' fontWeight={700}>0 Comments</Typography>
      <Typography variant='body1' fontWeight={700}>Sort By Best</Typography>
    </Box>
    <Stack sx={{ bgcolor: '#313131', p: '20px' }} spacing={2}>
      <Box sx={{ display: 'inline-flex' }}>
        <Avatar alt='Commentor' src={image} />
        <FormControl sx={{ width: '100%', ml: 2 }}>
          <OutlinedInput placeholder='Please enter text' />
        </FormControl>
      </Box>
      <Unit />
      <Unit />
      <Unit />
      <Unit />
    </Stack>
  </Box>
))

export default Comments
