import { CardContent, Typography, Box } from '@mui/material'
import { Link } from 'react-router-dom'

const PitchDetails = ({ msg, id }) => (
  <CardContent sx={{ pb: 1 }}>
    <Box component={Link} to={`/question/${id}`} sx={{ color: 'white', textDecoration: 'none' }}>
      <Typography gutterBottom variant='h5'>
        {msg}
      </Typography>
    </Box>
    <Typography variant='body1' color='#8e8d8d'>
      $6 Raised | 2 Pledges
    </Typography>
  </CardContent>
)

export default PitchDetails
