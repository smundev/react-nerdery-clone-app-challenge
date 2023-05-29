export const findWishListByID = (arr: Array<any>, id: string) => {
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
