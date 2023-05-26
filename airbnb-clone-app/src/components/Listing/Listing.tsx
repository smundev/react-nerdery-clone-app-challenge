import { Card, SkeletonCard } from './Card'
import { useListing } from '../../hooks/useListing'
import { useEffect } from 'react'
import styled from 'styled-components'
import { useObserveElement } from '../../hooks/useObserveElement'
import { useSearchParams } from 'react-router-dom'

const ListingContainer = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex: 1;
  gap: 1rem;
  margin: 24px;
  flex-wrap: wrap;

  @media (max-width: 675px) {
    margin: 12px;
  }
`

export const Listing = () => {
  const [searchParams] = useSearchParams()
  const { data, loading, getPageListing, hasMore } = useListing(searchParams)
  const { objectVisible, objectRef } = useObserveElement({
    loading,
    continueObserving: hasMore,
  })

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [searchParams])

  useEffect(() => {
    getPageListing()
  }, [objectVisible, searchParams])

  return (
    <>
      <ListingContainer>
        {data.map((item, index) => {
          if (data.length === index + 1)
            return (
              <Card
                key={item.id}
                id-test={item.id}
                title={item.address.street}
                host={item.host.host_name}
                hostJob={item.host.host_work_info}
                images={item.images}
                price={item.price}
                rating={item.rating}
                ref={objectRef}
              />
            )
          return (
            <Card
              key={item.id}
              id-test={item.id}
              title={item.address.street}
              host={item.host.host_name}
              hostJob={item.host.host_work_info}
              images={item.images}
              price={item.price}
              rating={item.rating}
            />
          )
        })}
        {loading &&
          Array.from(Array(10).keys()).map((_, index) => (
            <SkeletonCard key={index} />
          ))}
        {!loading && data.length === 0 && (
          <h3>No listings found for this category</h3>
        )}
      </ListingContainer>
    </>
  )
}
