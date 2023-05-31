import { forwardRef, useState } from 'react'
import {
  StyledCard,
  ImageWrapper,
  CardSection,
  StyledImage,
  WishlistButton,
} from './Card.styled'
import { AiFillStar } from 'react-icons/ai'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { v4 as uuidv4 } from 'uuid'
import { MdOutlineFavorite, MdOutlineFavoriteBorder } from 'react-icons/md'
import { useWishlist } from '../../hooks/useWishlist'
import { useNavigate } from 'react-router-dom'

type CardProps = {
  idListing: string
  title: string
  host: string
  hostJob: string
  images: string[]
  price: number
  rating: number
  isWishlisted: number | null
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      title,
      host,
      hostJob,
      images,
      price,
      rating,
      idListing,
      isWishlisted,
    }: CardProps,
    ref
  ) => {
    const [wishListed, setWishListed] = useState(isWishlisted)
    const { addItemToWishList, removeItemFromWishList } = useWishlist()
    const navigate = useNavigate()

    const handleWishlist = () => {
      if (!wishListed)
        addItemToWishList(idListing, title, images[0]).then((res) => {
          if (res) {
            setWishListed(res.id)
          }
        })
      else handleRemoveWishlist()
    }

    const handleRemoveWishlist = () => {
      if (!wishListed) return
      removeItemFromWishList(wishListed).then((res) => {
        if (res) {
          setWishListed(null)
        }
      })
    }

    const handleListing = (event: any) => {
      event.stopPropagation()
      navigate(`/listing/${idListing}`)
    }

    return (
      <>
        <StyledCard ref={ref}>
          <WishlistButton
            color={wishListed ? 'primary-01' : 'neutral-03'}
            hoverColor={wishListed ? 'neutral-03' : 'primary-01'}
            onClick={() => handleWishlist()}
          >
            {wishListed ? (
              <MdOutlineFavorite size={25} />
            ) : (
              <MdOutlineFavoriteBorder size={25} />
            )}
          </WishlistButton>

          <Carousel
            showIndicators={true}
            infiniteLoop={true}
            showStatus={false}
            showThumbs={false}
            transitionTime={500}
          >
            {images.map((image) => (
              <ImageWrapper key={uuidv4()} onClick={handleListing}>
                <StyledImage alt={title} src={image} />
              </ImageWrapper>
            ))}
          </Carousel>
          <CardSection onClick={handleListing}>
            <header>
              <strong>{title}</strong>
              <strong>
                <AiFillStar />
                {rating}
              </strong>
            </header>
            <label>
              Stay with {host}&nbsp;·&nbsp;{hostJob}
            </label>
            <span>
              <strong>{price} USD</strong> night
            </span>
          </CardSection>
        </StyledCard>
      </>
    )
  }
)

export const SkeletonCard = () => (
  <StyledCard>
    <ImageWrapper>
      <Skeleton height={'100%'} width={305} />
    </ImageWrapper>

    <CardSection>
      <header>
        <strong>
          <Skeleton width={150} />
        </strong>
        <strong>
          <Skeleton width={30} />
        </strong>
      </header>
      <label>
        <Skeleton width={200} />
      </label>
      <span>
        <strong>
          <Skeleton width={80} />
        </strong>
      </span>
    </CardSection>
  </StyledCard>
)
