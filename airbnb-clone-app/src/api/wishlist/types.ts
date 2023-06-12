export type WishListParams = {
  id?: number
  user?: string
  listing_id?: string
  name?: string
  picture_url?: string
}

export type WishList = {
  id: string
  name: string
  picture_url: string
  listing_id: string
}

export type WishListResponse = {
  data: WishList[]
}
