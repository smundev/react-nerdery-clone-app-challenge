import * as useListing from '../../../src/hooks/useListing'
import * as useObserveElement from '../../../src/hooks/useObserveElement'
import * as useWishlist from '../../../src/hooks/useWishlist'
import * as useAuth from '../../../src/hooks/useAuth'
import { Listing } from '../../../src/api/listing/types'
import { WishList } from '../../../src/api/wishlist/types'

export const useListingMock = (mockData: Listing[] = []) =>
  jest.spyOn(useListing, 'useListing').mockReturnValue({
    data: mockData,
    loading: false,
    getPaginatedListing: jest.fn(),
    getAllListing: jest.fn(),
    getOneListing: jest.fn(),
    resetData: jest.fn(),
    hasMore: false,
    error: null,
  })

export const useWishlistMock = (mockData: WishList[] = []) =>
  jest.spyOn(useWishlist, 'useWishlist').mockReturnValue({
    getMyWishList: jest.fn().mockResolvedValue(mockData),
    addItemToWishList: jest.fn(),
    removeItemFromWishList: jest.fn(),
  })

//mock useObserveElement hook implementation

export const useObserveElementMock = () =>
  jest.spyOn(useObserveElement, 'useObserveElement').mockReturnValue({
    objectVisible: true,
    objectRef: jest.fn(),
  })
export const useAuthMock = () =>
  jest.spyOn(useAuth, 'useAuth').mockReturnValue({
    user: null,
    signIn: jest.fn(),
    error: null,
    loading: false,
    setError: jest.fn(),
    registerUser: jest.fn(),
    logOut: jest.fn(),
  })
