import { render, screen, waitFor, within } from '@testing-library/react'
import UserEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import '@testing-library/jest-dom'
import { Navbar } from '../Navbar'
import { Wrapper } from '../../../../../test/jest/__mocks__/wrapperMock'

beforeEach(() => {
  render(
    <MemoryRouter>
      <Navbar />
    </MemoryRouter>,
    { wrapper: Wrapper }
  )
})
describe('navbar_rendering', () => {
  it('navbar_renders', async () => {
    await waitFor(() =>
      expect(screen.getAllByAltText('airbnb-site-logo')).toHaveLength(1)
    )
  })

  it('navbar_renders_base_menu_options', async () => {
    await waitFor(() => {
      expect(
        screen.getByRole('button', { name: /anywhere/i })
      ).toBeInTheDocument()
      expect(
        screen.getByRole('button', { name: /add guests/i })
      ).toBeInTheDocument()
      expect(
        screen.getByRole('button', { name: /any week/i })
      ).toBeInTheDocument()
    })
  })

  it('navbar_renders_user_menu_options', async () => {
    await waitFor(() => {
      expect(screen.getByText(/sign up/i)).toBeInTheDocument()
      expect(screen.getByText(/log in/i)).toBeInTheDocument()
    })
  })
})

describe('navbar_functionality', () => {
  it('expand_advanced_search', async () => {
    const anywhereButton = screen.getByRole('button', { name: /anywhere/i })
    await UserEvent.click(anywhereButton)

    await waitFor(() => {
      expect(
        screen.getByRole('button', {
          name: /stays/i,
        })
      ).toBeVisible()
      expect(
        screen.getByRole('link', {
          name: /online experiences/i,
        })
      ).toBeVisible()
      expect(screen.getByPlaceholderText(/search destinations/i)).toBeVisible()

      expect(screen.getByText(/check in/i)).toBeVisible()
      expect(screen.getByText(/check out/i)).toBeVisible()

      const view = screen.getByText(/who/i)
      within(view).getByText(/add guests/i)
    })
  })

  it('advanced_search_where', async () => {
    const anywhereButton = screen.getByRole('button', { name: /anywhere/i })
    await UserEvent.click(anywhereButton)

    await waitFor(() => {
      expect(screen.getByText(/i am flexible/i)).toBeVisible()
      expect(screen.getByText(/europe/i)).toBeVisible()
      expect(screen.getByText(/guatemala/i)).toBeVisible()
      expect(screen.getByText(/south america/i)).toBeVisible()
      expect(screen.getByText(/mexico/i)).toBeVisible()
      expect(screen.getByText(/united states/i)).toBeVisible()
    })
  })

  it('advanced_search_dates', async () => {
    const anyweek = screen.getByRole('button', { name: /any week/i })
    await UserEvent.click(anyweek)

    await waitFor(() => {
      expect(screen.getByPlaceholderText(/early/i)).toBeVisible()
      expect(screen.getByPlaceholderText(/continuous/i)).toBeVisible()
    })
  })

  it('advanced_search_guests', async () => {
    const guests = screen.getByRole('button', { name: /add guests/i })
    await UserEvent.click(guests)
    await waitFor(() => {
      expect(screen.getByText(/adults/i)).toBeVisible()
      expect(screen.getByText(/children/i)).toBeVisible()
      expect(screen.getByText(/infants/i)).toBeVisible()
      expect(screen.getByText(/pets/i)).toBeVisible()
    })
  })
})
