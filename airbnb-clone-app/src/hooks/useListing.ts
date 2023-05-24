import { useState } from 'react'
import { getAll, getPage } from '../api/listing/listing'
import { Listing } from '../api/listing/types'

export const useListing = () => {
  const [data, setData] = useState<Listing[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [hasMore, setHasMore] = useState(false)

  const getAllListing = async () => {
    try {
      setLoading(true)
      const fetchData = await getAll()
      setData(fetchData)
      setHasMore(fetchData.length > 0)
      setLoading(false)
      setError(null)
    } catch (error) {
      setLoading(false)
      setError('An error has ocurred while trying to get all listing')
      setData([])
      setHasMore(false)
    }
  }

  const getPageListing = async (page: number) => {
    try {
      setLoading(true)
      const fetchData = await getPage(page)
      setData((prevData) => [...prevData, ...fetchData])
      setHasMore(fetchData.length > 0)
      setLoading(false)
      setError(null)
    } catch (error) {
      setLoading(false)
      setError('An error has ocurred while trying to get the listing page')
      setData([])
      setHasMore(false)
    }
  }

  return { data, loading, error, hasMore, getAllListing, getPageListing }
}
