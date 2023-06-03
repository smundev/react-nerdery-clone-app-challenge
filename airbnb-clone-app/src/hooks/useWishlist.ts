import {
  addToWishList,
  getWishList,
  removeFromWishList,
} from '../api/wishlist/wishlist'
import { useAuthContext } from '../context/AuthContext'

export const useWishlist = () => {
  const { user, openLogin, logOut } = useAuthContext()

  const getMyWishList = async () => {
    if (!user) return []
    return await getWishList(
      {
        user: user.user.id,
      },
      user.accessToken
    )
      .then((data) => data)
      .catch((e) => {
        console.error(e.message as string)
        if (e.response?.status === 401) {
          logOut()
        }
        return []
      })
  }

  const addItemToWishList = async (
    listing_id: string,
    name: string,
    picture_url: string
  ) => {
    try {
      if (!user) {
        openLogin()
        throw new Error('Not logged in')
      }
      const { data } = await addToWishList(
        {
          user: user.user.id,
          listing_id,
          name,
          picture_url,
        },
        user.accessToken
      )
      return data
    } catch (e: any) {
      if (e.response?.status === 401) {
        logOut()
      }
      console.error(e.message as string)
    }
  }

  const removeItemFromWishList = async (id: number) => {
    try {
      if (!user) {
        throw new Error('Not logged in')
      }
      const { data } = await removeFromWishList(
        {
          id,
        },
        user.accessToken
      )
      return data
    } catch (e: any) {
      console.error(e.message as string)
    }
  }

  return {
    removeItemFromWishList,
    addItemToWishList,
    getMyWishList,
  }
}
