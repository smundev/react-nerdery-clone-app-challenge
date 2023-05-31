import ReactDOM from 'react-dom/client'
import { GlobalStyles } from './components/Styles/GlobalStyles'
import { ThemeProvider } from 'styled-components'
import { theme } from './components/Styles/theme'
import { RouterProvider } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import { router } from './router/history'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ThemeProvider theme={theme}>
    <AuthProvider>
      <GlobalStyles />
      <RouterProvider router={router} />
    </AuthProvider>
  </ThemeProvider>
)
