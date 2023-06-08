import { render, screen, waitFor } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { Listing } from '../Listing'
import '@testing-library/jest-dom'
import { Wrapper } from '../../../../test/jest/__mocks__/wrapperMock'
import { generateFakeListing } from '../../../../test/jest/__mocks__/dataMock'
import {
  useListingMock,
  useWishlistMock,
  useAuthMock,
  useObserveElementMock,
} from '../../../../test/jest/__mocks__/hooksMock'

it('test_listing_renders_with_data', async () => {
  const mockData = generateFakeListing()

  useListingMock([mockData])
  useWishlistMock()
  useAuthMock()
  useObserveElementMock()
  window.scrollTo = jest.fn()

  render(
    <MemoryRouter initialEntries={['/listing']}>
      <Listing />
    </MemoryRouter>,
    { wrapper: Wrapper }
  )

  await waitFor(() => {
    expect(
      screen.getByText(new RegExp(mockData.address.street, 'i'))
    ).toBeInTheDocument()
    expect(
      screen.getByText(new RegExp(mockData.host.host_name, 'i'))
    ).toBeInTheDocument()
    expect(
      screen.getByText(
        new RegExp(
          mockData.reviews.review_scores.review_scores_rating.toString(),
          'i'
        )
      )
    ).toBeInTheDocument()
    expect(
      screen.getByText(new RegExp(`${mockData.price} USD`, 'i'))
    ).toBeInTheDocument()
  })
})
