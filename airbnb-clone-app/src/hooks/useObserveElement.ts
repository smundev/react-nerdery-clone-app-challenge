import { useState, useRef, useCallback } from 'react'

export const useObserveElement = ({
  loading,
  continueObserving,
}: {
  loading: boolean
  continueObserving: boolean
}) => {
  const [objectVisible, setObjectVisible] = useState(false)
  const observer = useRef<IntersectionObserver>()

  const objectRef = useCallback(
    (node: any) => {
      if (loading) return // This is to prevent from sending too many requests to the API (Optional)
      if (observer.current) observer.current.disconnect()
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && continueObserving)
          setObjectVisible((current) => !current)
      })
      if (node) observer.current.observe(node)
    },
    [loading, continueObserving]
  )

  return { objectVisible, objectRef }
}
