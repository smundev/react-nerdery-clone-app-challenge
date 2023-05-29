export const findWishListByID = (arr: Array<any>, id: string) => {
  let foundId = null
  console.log(id, arr)
  arr.some((item) => {
    if (item.listing_id === id) {
      foundId = item.id
      return true // Exit the loop once a match is found
    }
    return false
  })
  console.log(foundId)
  return foundId
}
