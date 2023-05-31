import { useEffect, useState } from 'react'
import {
  addToWishList,
  getWishList,
  removeFromWishList,
} from '../api/wishlist/wishlist'
import { WishList } from '../api/wishlist/types'
import { useAuthContext } from '../context/AuthContext'

export const useWishlist = () => {
  const { user, openLogin } = useAuthContext()
  const [wishlist, setWishlist] = useState<WishList[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null)

  useEffect(() => {
    if (!user) {
      setWishlist([])
      return
    }

    const getMyWishList = async () => {
      setLoading(true)
      setError(null)
      try {
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
    getMyWishList()
  }, [lastUpdated])

  const addItemToWishList = async (
    listing_id: string,
    name: string,
    picture_url: string
  ) => {
    setLoading(true)
    setError(null)
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
      setLastUpdated(new Date())
      return data
    } catch (e: any) {
      setError(e.message as string)
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
    removeItemFromWishList,
    addItemToWishList,
  }
}
