import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import image from 'assets/slider5.png'
import ActivePitchActions from './actions'

export default function ActivePitch() {
  return (
    <Card sx={{
      maxWidth: 200, bgcolor: '#000000c2', mr: 1, mb: 2,
    }}
    >
      <CardMedia
        component='img'
        height='215'
        image={image}
        alt='Active Pitch'
      />
      <CardContent>
        <Typography gutterBottom variant='h5' component='div' color='white'>
          Active Pitch
        </Typography>
        <Typography variant='body1' color='#8e8d8d'>
          $6 Raised | 2 Pledges
        </Typography>
      </CardContent>
      <ActivePitchActions />
    </Card>
  )
}
