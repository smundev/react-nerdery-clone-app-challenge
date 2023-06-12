import { render, screen, waitFor } from '@testing-library/react'
import UserEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import '@testing-library/jest-dom'
import { Wrapper } from '../../../../../test/jest/__mocks__/wrapperMock'
import * as useListing from '../../../../hooks/useListing'
import Detail from '../Detail'
import { generateFakeListing } from '../../../../../test/jest/__mocks__/dataMock'

describe('listing_detail_rendering', () => {
  const mockWindowOpen = jest.fn()

  Object.defineProperty(window, 'open', {
    writable: true,
    value: mockWindowOpen,
  })
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

  it('listing_detail_data_renders_valid', async () => {
    render(
      <MemoryRouter>
        <Detail />
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

      mockData.amenities.forEach((amenity) => {
        expect(screen.getByText(amenity)).toBeInTheDocument()
      })
    })
  })

  it('listing_detail_image_click', async () => {
    render(
      <MemoryRouter>
        <Detail />
      </MemoryRouter>,
      { wrapper: Wrapper }
    )
    const image = screen.getAllByAltText('listing')[0]
    await UserEvent.click(image)

    await waitFor(() => {
      expect(mockWindowOpen).toBeCalledTimes(1)
    })
  })
})
