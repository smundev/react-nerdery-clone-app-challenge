import { forwardRef } from 'react'
import {
  StyledCard,
  ImageWrapper,
  CardSection,
  StyledImage,
} from './Card.styled'
import { AiFillStar } from 'react-icons/ai'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

type CardProps = {
  title: string
  host: string
  hostJob: string
  images: string[]
  price: number
  rating: number
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ title, host, hostJob, images, price, rating }: CardProps, ref) => {
    return (
      <>
        <StyledCard ref={ref}>
          <Carousel
            showIndicators={true}
            infiniteLoop={true}
            showStatus={false}
            showThumbs={false}
            transitionTime={500}
          >
            {images.map((image, index) => (
              <ImageWrapper key={index}>
                <StyledImage alt={title} src={image} />
              </ImageWrapper>
            ))}
          </Carousel>
          <CardSection>
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
