import ReactDOM from 'react-dom/client'
import App from './App'
import { GlobalStyles } from './components/Styles/GlobalStyles'
import { ThemeProvider } from 'styled-components'
import { theme } from './components/Styles/theme'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'

import Styleguide from './Styleguide'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/styleguide',
    element: <Styleguide />,
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <AuthProvider>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <RouterProvider router={router} />
    </ThemeProvider>
  </AuthProvider>
)