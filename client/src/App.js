import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { Suspense } from 'react'

import { Router } from 'components'
import { BrowserRouter } from 'react-router-dom'
import { Nav, Loader } from 'layouts'

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
  <Suspense fallback={<Loader />}>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <BrowserRouter>
        <Nav />
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  </Suspense>
)

export default App
