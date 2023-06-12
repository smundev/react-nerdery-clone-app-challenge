import { render, screen, waitFor } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import '@testing-library/jest-dom'
import { Wrapper } from '../../../../test/jest/__mocks__/wrapperMock'
import Wishlists from '../Wishlists'
import { useWishlistMock } from '../../../../test/jest/__mocks__/hooksMock'
describe('wishlists_rendering', () => {
  it('empty_wishlist_page_renders', async () => {
    const route = '/wishlist'

    render(
      <MemoryRouter initialEntries={[route]}>
        <Wishlists />
      </MemoryRouter>,
      { wrapper: Wrapper }
    )
    await waitFor(() =>
      expect(screen.getByText('Wishlist')).toBeInTheDocument()
    )
  })

  it('wishlist_data_renders', async () => {
    const route = '/wishlist'

    useWishlistMock([
      {
        id: '1',
        name: 'My Wishlisted place',
        picture_url: 'image1.jpg',
        listing_id: '1',
      },
    ])

    render(
      <MemoryRouter initialEntries={[route]}>
        <Wishlists />
      </MemoryRouter>,
      { wrapper: Wrapper }
    )
    await waitFor(() =>
      expect(screen.getByText(/My Wishlisted place/i)).toBeInTheDocument()
    )
  })
})
