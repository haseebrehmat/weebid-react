import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import Auth from 'containers/auth'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    warning: {
      main: '#f8b500',
      contrastText: '#fff',
    },
  },
})

const App = () => (
  <ThemeProvider theme={darkTheme}>
    <CssBaseline />
    <Auth />
  </ThemeProvider>
)

export default App
