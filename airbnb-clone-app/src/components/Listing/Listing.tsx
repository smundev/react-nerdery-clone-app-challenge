import { Card, SkeletonCard } from './Card'
import { useListing } from '../../hooks/useListing'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useObserveElement } from '../../hooks/useObserveElement'
import { useSearchParams } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import { WishList } from '../../api/wishlist/types'
import { useAuthContext } from '../../context/AuthContext'
import { useWishlist } from '../../hooks/useWishlist'
import { findWishListByID } from '../../utils/utils'

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
  const { data, loading, getPaginatedListing, hasMore } =
    useListing(searchParams)
  const { objectVisible, objectRef } = useObserveElement({
    loading,
    continueObserving: hasMore,
  })
  const { getMyWishList, addItemToWishList, removeItemFromWishList } =
    useWishlist()

  const [wishlist, setWishlist] = useState<WishList[]>([])
  const [wishlistChanged, setWishlistChanged] = useState(false)
  const { user } = useAuthContext()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [searchParams])

  useEffect(() => {
    getPaginatedListing()
  }, [objectVisible, searchParams])

  useEffect(() => {
    getMyWishList().then((res) => {
      setWishlist(res)
    })
  }, [user, wishlistChanged])

  const addToWishList = (
    idListing: string,
    title: string,
    image_url: string
  ) => {
    addItemToWishList(idListing, title, image_url).then(() =>
      setWishlistChanged(!wishlistChanged)
    )
  }

  const removeFromWishList = (idWishlisted: number) => {
    removeItemFromWishList(idWishlisted).then(() =>
      setWishlistChanged(!wishlistChanged)
    )
  }

  return (
    <>
      <ListingContainer>
        {data.map((item, index) => {
          return (
            <Card
              key={item.id}
              idListing={item.id}
              title={item.address.street}
              host={item.host.host_name}
              hostJob={item.host.host_work_info}
              images={item.images}
              price={item.price}
              rating={item.reviews.review_scores.review_scores_rating}
              isWishlisted={findWishListByID(wishlist, item.id)}
              addFn={addToWishList}
              removeFn={removeFromWishList}
              ref={data.length === index + 1 ? objectRef : undefined}
            />
          )
        })}
        {loading &&
          Array.from({ length: 10 }, () => <SkeletonCard key={uuidv4()} />)}
        {!loading && data.length === 0 && (
          <h3>No listings found for this category</h3>
        )}
      </ListingContainer>
    </>
  )
}
