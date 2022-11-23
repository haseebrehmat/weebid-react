import { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider, createTheme } from '@mui/material/styles'

import { Router } from 'components'
import { Nav, Loader } from 'layouts'

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: 'Biko',
      fontWeight: 400,
    },
    button: {
      textTransform: 'none',
      fontSize: '16px',
    },
  },
})

const App = () => (
  <ThemeProvider theme={theme}>
    <Suspense fallback={<Loader />}>
      <BrowserRouter>
        <Nav />
        <Router />
      </BrowserRouter>
    </Suspense>
  </ThemeProvider>
)

export default App
