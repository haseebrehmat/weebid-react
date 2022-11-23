import { Button, Divider, Typography } from '@mui/material'
import GoogleIcon from '@mui/icons-material/Google'
import FacebookIcon from '@mui/icons-material/Facebook'

import {
  socialBtnsSx, googleBtnSx, fbBtnSx, orSx, createAccountSx, dividerSx, notUserSx,
} from './style'

const AuthActions = ({ login }) => (
  <>
    <Button variant='contained' id='theme-btn' type='submit' sx={socialBtnsSx}>
      {login ? 'Sign In' : 'Sign Up'}
    </Button>
    <Typography sx={orSx}>-Or-</Typography>
    <Button variant='contained' startIcon={<GoogleIcon />} sx={googleBtnSx}>
      Continue with Google
    </Button>
    <Button variant='contained' startIcon={<FacebookIcon />} sx={fbBtnSx}>
      Continue with Facebook
    </Button>
    <Divider sx={dividerSx} />
    <Typography sx={notUserSx}>Not yet a user?
      <Typography component='span' sx={createAccountSx}>Create an account</Typography>
    </Typography>
  </>
)

export default AuthActions
