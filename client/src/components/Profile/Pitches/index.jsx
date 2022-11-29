import { useState } from 'react'
import {
  Box, Tab, Tabs, Typography,
} from '@mui/material'

import { tabsProps } from './props'

const ProfilePitches = () => {
  const [tabIndex, setTabIndex] = useState(0)

  const handleTabChange = (event, newTabIndex) => {
    setTabIndex(newTabIndex)
  }

  return (
    <Box>
      <Box>
        <Tabs {...tabsProps(tabIndex)} onChange={handleTabChange}>
          <Tab label='Active Pitches' />
          <Tab label='Fulfilled Pitches' />
        </Tabs>
      </Box>
      <Box sx={{ padding: 2 }}>
        {tabIndex === 0 && (
          <Box>
            <Typography color='white'>The first tab</Typography>
          </Box>
        )}
        {tabIndex === 1 && (
          <Box>
            <Typography color='white'>The second tab</Typography>
          </Box>
        )}
      </Box>
    </Box>
  )
}

export default ProfilePitches
