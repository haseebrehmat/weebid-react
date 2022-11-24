import { Avatar, Typography } from '@mui/material'
import { decodeJwt } from 'utils/helpers'

const Home = () => {
  const { user } = decodeJwt()

  return (
    <>
      <Avatar alt='A' src={user.avatar} sx={{ bgcolor: 'white' }} /><br />
      <Typography sx={{ color: 'white' }}>
        Name: {user.name}<br />
        Role: {user.role}<br />
      </Typography>
    </>
  )
}

export default Home
