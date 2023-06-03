import { useEffect, useRef, useState } from 'react'
import { getAll, getPage, getOne } from '../api/listing/listing'
import { Listing } from '../api/listing/types'

export const useListing = (queryParam: URLSearchParams) => {
  const [data, setData] = useState<Listing[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [hasMore, setHasMore] = useState(false)
  const page = useRef(1)

  useEffect(() => {
    resetData()
  }, [queryParam])

  const getAllListing = async () => {
    setLoading(true)
    await getAll()
      .then((data) => {
        setData(data)
        setHasMore(data.length > 0)
        setLoading(false)
        setError(null)
      })

      .catch((e) => {
        console.error(e.message)
        setLoading(false)
        setError('An error has ocurred while trying to get all listing')
        setData([])
        setHasMore(false)
      })
  }

  const updateCountAndPage = (
    prevData: Array<Listing>,
    paginatedData: Array<Listing>,
    totalCount: number
  ) => {
    const hasRemainingData = prevData.length + paginatedData.length < totalCount
    setHasMore(hasRemainingData)
    if (hasRemainingData) page.current++
  }

  const getPaginatedListing = async () => {
    setLoading(true)
    queryParam.append('_page', page.current.toString())
    const query_filters = Object.fromEntries(queryParam.entries())
    await getPage(query_filters)
      .then((data) => {
        const [paginatedData, totalCount] = data
        setData((prevData) => {
          updateCountAndPage(prevData, paginatedData, totalCount)
          return [...prevData, ...paginatedData]
        })
        setLoading(false)
        setError(null)
      })
      .catch((e) => {
        console.error(e.message)
        setLoading(false)
        setError('An error has ocurred while trying to get the listing page')
        setData([])
        setHasMore(false)
      })
  }

  const getOneListing = async (id: string) => {
    try {
      setLoading(true)
      const data = await getOne(id)
      setData(data)
      setError(null)
      setLoading(false)
    } catch (error) {
      setLoading(false)
      setError('An error has ocurred while trying to get the listing')
      setData([])
      setHasMore(false)
    }
  }

  const resetData = () => {
    page.current = 1
    setData([])
    setLoading(false)
    setError(null)
    setHasMore(false)
  }

  return {
    data,
    loading,
    error,
    hasMore,
    getAllListing,
    getPaginatedListing,
    getOneListing,
    resetData,
  }
}
