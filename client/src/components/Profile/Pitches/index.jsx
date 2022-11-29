import { useState } from 'react'
import {
  Box, Tab, Tabs,
} from '@mui/material'

import { tabsProps } from './props'
import ActivePitch from './active'
import FullfilledPitch from './fullfilled'

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
      <Box sx={{ pt: 3 }}>
        {tabIndex === 0 && (
          <Box sx={{ display: 'inline-flex', flexWrap: 'wrap', flexGrow: 1 }}>
            <ActivePitch />
            <ActivePitch />
            <ActivePitch />
            <ActivePitch />
            <ActivePitch />
            <ActivePitch />
            <ActivePitch />
            <ActivePitch />
          </Box>
        )}
        {tabIndex === 1 && (
          <Box sx={{ display: 'inline-flex', flexWrap: 'wrap', flexGrow: 1 }}>
            <FullfilledPitch />
            <FullfilledPitch />
            <FullfilledPitch />
            <FullfilledPitch />
          </Box>
        )}
      </Box>
    </Box>
  )
}

export default ProfilePitches
