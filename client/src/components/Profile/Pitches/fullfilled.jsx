import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import image from 'assets/slider5.png'
import ActivePitchActions from './actions'
import Box from '@mui/material/Box'

const fulfilledProps = {
  variant: 'inherit',
  sx: {
    color: 'white',
    ml: '10px',
    bgcolor: '#363130eb',
    fontWeight: 700,
    padding: '6px 12px',
    borderRadius: '8px',
  },
}

export default function FullfilledPitch() {
  return (
    <Card sx={{
      maxWidth: 200, bgcolor: '#000000c2', mr: 1, mb: 2,
    }}
    > <Box style={{ position: 'relative' }}>
      <CardMedia
        component='img'
        height='215'
        image={image}
        alt='Active Pitch'
      />
      <Box sx={{
        position: 'absolute',
        top: '80%',
      }}
      >
        <Typography {...fulfilledProps}>
          ✅ Fullfilled
        </Typography>

      </Box>
    </Box>
      <CardContent>
        <Typography gutterBottom variant='h5' component='div' color='white'>
          Fullfiled Pitch
        </Typography>
        <Typography variant='body1' color='#8e8d8d'>
          $6 Raised | 2 Pledges
        </Typography>
      </CardContent>
      <ActivePitchActions />
    </Card>
  )
}
