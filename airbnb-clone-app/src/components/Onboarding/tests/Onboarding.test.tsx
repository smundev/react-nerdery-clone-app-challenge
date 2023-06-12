import { render, screen, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import UserEvent from '@testing-library/user-event'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from '../../Styles/GlobalStyles'
import { theme } from '../../Styles/theme'
import { Onboarding } from '../Onboarding'

describe('onboarding_rendering', () => {
  const Wrapper = ({ children }: any) => (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  )

  beforeEach(() => {
    jest.clearAllMocks()
    localStorage.clear()
  })

  it('test_modal_opens_on_first_login', async () => {
    localStorage.setItem('show-onboarding-guidelines', 'true')
    render(<Onboarding user={null} />, { wrapper: Wrapper })
    await waitFor(() => {
      expect(
        screen.queryByText(/Our community commitment/i)
      ).toBeInTheDocument()
    })
  })

  it('test_modal_does_not_open_on_subsequent_logins', () => {
    const user = null
    render(<Onboarding user={user} />)
    expect(
      screen.queryByText(/Our community commitment/i)
    ).not.toBeInTheDocument()
  })

  it('test_user_agrees_to_community_commitment', async () => {
    localStorage.setItem('show-onboarding-guidelines', 'true')
    render(<Onboarding user={null} />, {
      wrapper: Wrapper,
    })

    const agreeButton = screen.getByText(/Agree and continue/i)
    await UserEvent.click(agreeButton)

    await waitFor(() => {
      expect(
        screen.queryByText(/Our community commitment/i)
      ).not.toBeInTheDocument()
    })
  })
})
