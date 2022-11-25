import { Box, Button, Typography } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'

const Slide = ({
  next, prev, text,
}) => (
  <Box className='slider-content'>
    <Typography>{text}</Typography>
    <Box className='slider-navigate'>
      <Button id='theme-btn2' onClick={prev}><ArrowBackIcon fontSize='large' /></Button>
      <Button id='theme-btn2' onClick={next}><ArrowForwardIcon fontSize='large' /></Button>
    </Box>
    <Box className='swiper-pagination' />
  </Box>
)

export default Slide
