import { Card } from './Card'
import { Skeleton } from './Skeleton'
import { useListing } from '../../hooks/useListing'
import { useEffect } from 'react'
import styled from 'styled-components'
import { useInfiniteScroll } from '../../hooks/useInfiniteScroll'

const ListingContainer = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 1rem;
  margin: 24px;
  flex-wrap: wrap;

  @media (max-width: 675px) {
    margin: 12px;
  }
`

export const Listing = () => {
  const { data, loading, hasMore, getPageListing } = useListing()
  const { page, objectRef } = useInfiniteScroll({ hasMore, loading })

  useEffect(() => {
    getPageListing(page)
  }, [page])

  return (
    <>
      <ListingContainer>
        {data.map((item, index) => {
          if (data.length === index + 1)
            return (
              <Card
                key={item.id}
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
              title={item.address.street}
              host={item.host.host_name}
              hostJob={item.host.host_work_info}
              images={item.images}
              price={item.price}
              rating={item.rating}
            />
          )
        })}
      </ListingContainer>
    </>
  )
}
