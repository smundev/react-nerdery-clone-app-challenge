import { WishList } from '../api/wishlist/types'

export const findWishListByID = (arr: Array<WishList>, id: string) => {
  let foundId = null
  arr.some((item) => {
    if (item.listing_id === id) {
      foundId = item.id
      return
    }
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

export const isDateOneDayInPast = (date: Date) => {
  const currentDate = new Date()
  const currentUTCDate = new Date(currentDate.toUTCString())
  const difference = currentUTCDate.getTime() - date.getTime()
  const oneDayInMilliseconds = 24 * 60 * 60 * 1000 // One day in milliseconds

  return (
    difference >= oneDayInMilliseconds && difference < 2 * oneDayInMilliseconds
  )
}
