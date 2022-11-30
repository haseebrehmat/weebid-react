import {
  CardMedia, Card, Box, Typography, Button, IconButton,
} from '@mui/material'
import { MoreHoriz } from '@mui/icons-material'

import {
  makePitchProps, threeDotsProps,
  nameAndActionsProps, imageProps, profileImgCard,
} from './props'

import image from 'assets/slider5.png'

const ProfileImage = () => (
  <Card {...profileImgCard}>
    <Box style={{ position: 'relative' }}>
      <CardMedia {...imageProps(image)} />
      <Box {...nameAndActionsProps}>
        <Typography variant='inherit' color='white' ml='10px'>
          Haseeb Rehmat ALi
        </Typography>
        <IconButton {...threeDotsProps}>
          <MoreHoriz fontSize='small' />
        </IconButton>
      </Box>
    </Box>
    <Button {...makePitchProps}>
      Make a pitch to Haseeb Rehmat ALi
    </Button>
  </Card>
)

export default ProfileImage
