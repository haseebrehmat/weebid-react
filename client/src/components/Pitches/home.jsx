import {
  useState, useEffect, memo, useRef,
} from 'react'
import {
  Box, Tab, Tabs, Grid,
} from '@mui/material'
import InfiniteScroll from 'react-infinite-scroll-component'

import FullfilledPitch from './fullfilled'
import ActivePitch from './active'
import { tabsProps } from './props'
import { allQuestions } from 'api/question'

const HomePitches = () => {
  const [tabIndex, setTabIndex] = useState(0)
  const [activePiches, setActivePitches] = useState([])
  const [page, setPage] = useState(1)
  const [more, setMore] = useState(true)
  const dataFetchedRef = useRef(false)

  const fetchQuestions = async () => {
    const { data, count } = await allQuestions(page)
    setActivePitches(prevData => [...prevData, ...data])
    setPage(page + 1)
    setMore(activePiches.length < count)
  }

  useEffect(() => {
    if (dataFetchedRef.current) return
    dataFetchedRef.current = true
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
          <InfiniteScroll
            dataLength={activePiches.length}
            next={fetchQuestions}
            hasMore={more}
            loader={<Box component='h1' color='white'>Loading............</Box>}
          >
            <Grid container spacing={2}>
              {activePiches.map(pitch => (
                <Grid item xs={12} sm={6} md={3} key={pitch.id}>
                  <ActivePitch pitch={pitch} />
                </Grid>
              ))}
            </Grid>
          </InfiniteScroll>
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

export default memo(HomePitches)
