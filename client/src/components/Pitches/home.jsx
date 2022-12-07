import { useState, useEffect } from 'react'
import {
  Box, Tab, Tabs, Grid,
} from '@mui/material'

import FullfilledPitch from './fullfilled'
import ActivePitch from './active'
import { tabsProps } from './props'
import { allQuestions } from 'api/question'

const HomePitches = () => {
  const [tabIndex, setTabIndex] = useState(0)
  const [activePiches, setActivePitches] = useState([])

  useEffect(() => {
    const fetchQuestions = async () => {
      const { data } = await allQuestions()
      setActivePitches(data)
    }
    fetchQuestions()
  }, [])

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
          <Grid container spacing={1}>
            {activePiches.map(pitch => (
              <Grid item xs={12} sm={6} md={3} key={pitch.id}>
                <ActivePitch pitch={pitch} />
              </Grid>
            ))}
          </Grid>
        )}
        {tabIndex === 1 && (
          <Grid container spacing={1}>
            {activePiches.map(pitch => (
              <Grid item xs={12} sm={6} md={3} key={pitch.id}>
                <FullfilledPitch pitch={pitch} charity />
              </Grid>
            ))}
          </Grid>
        )}
      </Box>
    </Box>
  )
}

export default HomePitches
