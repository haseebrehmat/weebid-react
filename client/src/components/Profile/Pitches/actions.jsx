import CardActions from '@mui/material/CardActions'
import IconButton from '@mui/material/Button'
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined'
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined'

const ActivePitchActions = () => (
  <CardActions sx={{ p: 2, gap: 1 }}>
    <IconButton sx={{
      border: '1px solid #8e8d8d', borderRadius: '24px', color: '#8e8d8d', height: '46px', minWidth: '46px',
    }}
    >
      <ShareOutlinedIcon />
    </IconButton>
    <IconButton sx={{
      border: '1px solid #8e8d8d', borderRadius: '24px', color: '#8e8d8d', height: '46px', minWidth: '46px', px: 2,
    }}
    >
      <ThumbUpOutlinedIcon />
    </IconButton>
  </CardActions>
)

export default ActivePitchActions
