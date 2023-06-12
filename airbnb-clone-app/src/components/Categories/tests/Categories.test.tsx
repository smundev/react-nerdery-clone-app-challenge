import { render, screen } from '@testing-library/react'

import '@testing-library/jest-dom'
import { Categories } from '../Categories'
import { MemoryRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { AuthProvider } from '../../../context/AuthContext'
import { GlobalStyles } from '../../../components/Styles/GlobalStyles'
import { theme } from '../../../components/Styles/theme'

export const Wrapper = ({ children }: any) => (
  <ThemeProvider theme={theme}>
    <AuthProvider>
      <GlobalStyles />
      {children}
    </AuthProvider>
  </ThemeProvider>
)

describe('categories_rendering', () => {
  it('test_categories_render_without_errors', () => {
    const route = '/'

    render(
      <MemoryRouter initialEntries={[route]}>
        <Categories />
      </MemoryRouter>,
      { wrapper: Wrapper }
    )

    const categoryBtns = screen.getAllByRole('option')

    expect(categoryBtns).toHaveLength(33)
  })

  it('rooms_category_exists', () => {
    const route = '/'

    render(
      <MemoryRouter initialEntries={[route]}>
        <Categories />
      </MemoryRouter>,
      { wrapper: Wrapper }
    )

    const categoryBtn = screen.getByRole('option', { name: /rooms/i })

    expect(categoryBtn).toBeInTheDocument()
  })
})
