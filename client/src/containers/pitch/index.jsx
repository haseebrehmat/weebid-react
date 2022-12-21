import { memo } from 'react'
import {
  CardMedia, Grid, Typography,
} from '@mui/material'
import { useParams } from 'react-router-dom'
import { useQuery } from 'react-query'

import {
  PitchBanner, PitchUser, PledgesAndComments, PitchActions,
} from 'components'
import { Loader } from 'layouts'

import { getQuestion } from 'api/question'
import { imageProps, msgProps, pledgedAmountProps } from './props'

const Pitch = () => {
  const { id } = useParams()
  const {
    isLoading, isError, error, data: pitch,
  } = useQuery({ queryKey: ['question', id], queryFn: () => getQuestion(id), staleTime: 6000 })

  if (isError) console.log(error)

  return isLoading ? <Loader /> : (
    <Grid container>
      <Grid container spacing={2} sx={{ px: 8, my: 5 }}>
        <Grid item md={6}>
          <CardMedia {...imageProps(pitch.receiver.avatar)} />
        </Grid>
        <Grid item md={6}>
          <PitchUser sender={pitch.sender} receiver={pitch.receiver} total={pitch.totalPledges} />
          <Typography {...msgProps}>{pitch.message}</Typography>
          <Typography {...pledgedAmountProps}>${pitch.totalPledged} USD Pledged</Typography>
          <PitchActions id={id} />
        </Grid>
      </Grid>
      <PitchBanner />
      <PledgesAndComments pledges={pitch.pledges} pitchBy={pitch.sender} total={pitch.totalPledges} id={id} />
    </Grid>
  )
}

export default memo(Pitch)
