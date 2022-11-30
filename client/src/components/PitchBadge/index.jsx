import { Box, Badge } from '@mui/material'
import { CommentOutlined } from '@mui/icons-material'

import PitchBadgeImage from './image'
import { badgeStyle } from './props'

const PitchBadge = () => (
  <Box>
    <Badge overlap='circular' badgeContent={<CommentOutlined fontSize='small' />} sx={badgeStyle}>
      {PitchBadgeImage}
    </Badge>
  </Box>
)

export default PitchBadge
