import { render, screen, waitFor } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import '@testing-library/jest-dom'
import { Wrapper } from '../../../../../test/jest/__mocks__/wrapperMock'
import * as useListing from '../../../../hooks/useListing'
import Detail from '../Detail'
import { generateFakeListing } from '../../../../../test/jest/__mocks__/dataMock'

describe('listing_detail_rendering', () => {
  it('listing_detail_data_renders_valid', async () => {
    const mockData = generateFakeListing()
    jest.spyOn(useListing, 'useListing').mockReturnValue({
      data: [mockData],
      loading: false,
      getPaginatedListing: jest.fn(),
      getAllListing: jest.fn(),
      getOneListing: jest.fn(),
      resetData: jest.fn(),
      hasMore: false,
      error: null,
    })

    render(
      <MemoryRouter>
        <Detail />
      </MemoryRouter>,
      { wrapper: Wrapper }
    )

    await waitFor(() => {
      //find mockData.address.street as a reges on screen
      expect(
        screen.getByText(new RegExp(mockData.address.street, 'i'))
      ).toBeInTheDocument()
      expect(
        screen.getByText(new RegExp(mockData.host.host_name, 'i'))
      ).toBeInTheDocument()

      //find all amenities
      mockData.amenities.forEach((amenity) => {
        expect(screen.getByText(new RegExp(amenity, 'i'))).toBeInTheDocument()
      })
    })
  })
})
