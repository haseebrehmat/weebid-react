// import { Avatar } from '@mui/material'
import { getToken } from 'utils/helpers'

const Home = () => {
  const token = getToken()
  console.log(token)

  return (
    <div>
      {/* <Avatar alt='A' src={location.state.avatar} sx={{ bgcolor: 'white' }} /><br />
      Name: {location.state.dataValues.name}<br />
      Role: {location.state.dataValues.role}<br /> */}
      {/* JWT: {token}<br /> */}
    </div>
  )
}

export default Home
