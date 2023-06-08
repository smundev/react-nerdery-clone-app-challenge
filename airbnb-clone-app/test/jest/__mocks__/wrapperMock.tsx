import { ThemeProvider } from 'styled-components'
import { AuthProvider } from '../../../src/context/AuthContext'
import { theme } from '../../../src/components/Styles/theme'
import { GlobalStyles } from '../../../src/components/Styles/GlobalStyles'

export const Wrapper = ({ children }: any) => (
  <ThemeProvider theme={theme}>
    <AuthProvider>
      <GlobalStyles />
      {children}
    </AuthProvider>
  </ThemeProvider>
)
