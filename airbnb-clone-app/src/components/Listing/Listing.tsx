import { Card, SkeletonCard } from './Card'
import { useListing } from '../../hooks/useListing'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useInfiniteScroll } from '../../hooks/useInfiniteScroll'
import { useLocation } from 'react-router-dom'

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
  const { data, loading, hasMore, getPageListing, resetData } = useListing()
  const { page, objectRef, resetPage } = useInfiniteScroll({ hasMore, loading })
  const { search } = useLocation()

  useEffect(() => {
    resetData()
    resetPage()
  }, [search])

  useEffect(() => {
    getPageListing(page, search)
  }, [page, search])

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
