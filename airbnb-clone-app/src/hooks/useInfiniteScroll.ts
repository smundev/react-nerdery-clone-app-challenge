import { useState, useRef, useCallback } from 'react'

type Props = {
  loading: boolean
  hasMore: boolean
}

export const useInfiniteScroll = ({ loading, hasMore }: Props) => {
  const [page, setPage] = useState(1)

  const observer = useRef<IntersectionObserver>()

  const objectRef = useCallback(
    (node: any) => {
      if (loading) return
      if (observer.current) observer.current.disconnect()
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore)
          setPage((prevPage) => prevPage + 1)
      })
      if (node) observer.current.observe(node)
    },
    [loading, hasMore]
  )

  const resetPage = () => {
    setPage(1)
  }

  return { page, objectRef, resetPage }
}
