import { memo, useState } from 'react'
import {
  Grid, Box, Tabs, Tab,
} from '@mui/material'

import Comments from './comments'
import Pledges from './pledges'

import { tabsProps } from './props'

const PledgesAndComments = memo(() => {
  const [tabIndex, setTabIndex] = useState(0)
  const handleTabChange = (event, newTabIndex) => setTabIndex(newTabIndex)

  return (
    <Grid container sx={{ p: '2.5em clamp(2.5em, 2vw, 3em)' }}>
      <Box width='100%'>
        <Box>
          <Tabs onChange={handleTabChange} {...tabsProps(tabIndex)}>
            <Tab label='Pledges' />
            <Tab label='Comments' />
          </Tabs>
        </Box>
        <Box sx={{ width: '100%' }}>
          {tabIndex === 0 && <Pledges />}
          {tabIndex === 1 && <Comments />}
        </Box>
      </Box>
    </Grid>
  )
})

export default PledgesAndComments
