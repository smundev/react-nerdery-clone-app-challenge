import { useEffect, useState } from 'react'
import {
  addToWishList,
  getWishList,
  removeFromWishList,
} from '../api/wishlist/wishlist'
import { WishList } from '../api/wishlist/types'
import { useAuthContext } from '../context/AuthContext'

export const useWishlist = () => {
  const { user } = useAuthContext()
  const [wishlist, setWishlist] = useState<WishList[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null)

  useEffect(() => {
    getMyWishList()
  }, [lastUpdated])

  const addItemToWishList = async (listingId: string, cb: () => void) => {
    setLoading(true)
    setError(null)
    try {
      if (!user) {
        cb()
        throw new Error('Not logged in')
      }
      const { data } = await addToWishList(
        {
          user: user.user.id,
          listing_id: listingId,
        },
        user.accessToken
      )
      setLastUpdated(new Date())
      return data
    } catch (e: any) {
      setError(e.message as string)
    } finally {
      setLoading(false)
    }
  }

  const getMyWishList = async () => {
    setLoading(true)
    setError(null)
    try {
      if (!user) {
        console.log(user)
        throw new Error('Not logged in')
      }
      const data = await getWishList(
        {
          user: user.user.id,
        },
        user.accessToken
      )
      setWishlist(data)
    } catch (e: any) {
      setError(e.message as string)
      console.error(e)
    } finally {
      setLoading(false)
    }
  }

  const removeItemFromWishList = async (id: number) => {
    setLoading(true)
    setError(null)
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
      setLastUpdated(new Date())
      return data
    } catch (e: any) {
      setError(e.message as string)
    } finally {
      setLoading(false)
    }
  }

  return {
    wishlist,
    loading,
    error,
    getMyWishList,
    removeItemFromWishList,
    addItemToWishList,
  }
}
