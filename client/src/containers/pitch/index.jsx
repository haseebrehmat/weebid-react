import { useState, useEffect } from 'react'
import {
  CardMedia, Grid, Typography,
} from '@mui/material'
import { useParams } from 'react-router-dom'

import {
  PitchBanner, PitchUser, PledgesAndComments, PitchActions,
} from 'components'
import { Loader } from 'layouts'

import { getQuestion } from 'api/question'

import { imageProps, msgProps, pledgedAmountProps } from './props'

const Pitch = () => {
  const { id } = useParams()
  const [loading, setLoading] = useState(false)
  const [pitch, setPitch] = useState()

  useEffect(() => {
    const fetchQuestion = async () => {
      const { data } = await getQuestion(id)
      setPitch(data)
      setLoading(true)
    }
    fetchQuestion()
  }, [id])

  return loading ? (
    <Grid container>
      <Grid container spacing={2} sx={{ px: 8, my: 5 }}>
        <Grid item md={6}>
          <CardMedia {...imageProps(pitch.receiver.avatar)} />
        </Grid>
        <Grid item md={6}>
          <PitchUser sender={pitch.sender} receiver={pitch.receiver} />
          <Typography {...msgProps}>{pitch.message}</Typography>
          <Typography {...pledgedAmountProps}>$3 USD Pledged</Typography>
          <PitchActions id={id} />
        </Grid>
      </Grid>
      <PitchBanner />
      <PledgesAndComments />
    </Grid>
  ) : <Loader />
}

export default Pitch
