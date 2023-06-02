import { WishList } from '../api/wishlist/types'

export const findWishListByID = (arr: Array<WishList>, id: string) => {
  let foundId = null
  arr.some((item) => {
    if (item.listing_id === id) {
      foundId = item.id
      return true // Exit the loop once a match is found
    }
    return false
  })
  return foundId
}

export const formatDate = (dateObj: Date) => {
  const formattedDate = dateObj.toLocaleString('en-US', {
    month: 'short',
    day: 'numeric',
  })
  return formattedDate
}