import Layout from '../../Layout/Layout'
import { useParams, useSearchParams } from 'react-router-dom'
import { useListing } from '../../../hooks/useListing'
import { useEffect } from 'react'
import { Flex } from '../../Common/Flex.styled'
import { StyledAnchor, StyledLabel } from '../../Common/Typography.styled'
import { AiFillStar } from 'react-icons/ai'
import { v4 as uuidv4 } from 'uuid'
import { Separator } from '../../Common/Input.styled'
import { BsDoorOpen } from 'react-icons/bs'
import { IoKeyOutline, IoLocationOutline } from 'react-icons/io5'

import {
  DetailWrapper,
  StyledImageWrapper,
  HostInfo,
  Amenities,
  Rating,
  ReviewUser,
} from './Detail.styled'

const Detail = () => {
  const [searchParams] = useSearchParams()
  const { data, loading, error, getOneListing } = useListing(searchParams)
  const [listing] = data

  const { id } = useParams()

  useEffect(() => {
    if (!id) return
    getOneListing(id)
  }, [id])

  useEffect(() => {
    document.title = listing?.name
  }, [listing])

  const handleImageClick = (e: any) => {
    window.open(e.target.src, '_blank')
  }

  return (
    <Layout>
      {loading && <h2>Loading...</h2>}
      {error && <h2>{error}</h2>}
      {listing && (
        <DetailWrapper>
          <Flex direction="row">
            <StyledLabel size="font-size-xxl" fontWeight="font-weight-bold">
              {listing.name}
            </StyledLabel>
          </Flex>
          <Flex direction="row">
            <StyledLabel size="font-size-m" fontWeight="font-weight-bold">
              <AiFillStar />
              &nbsp;
              {listing.reviews.review_scores.review_scores_rating}
            </StyledLabel>
            &nbsp;·&nbsp;
            <StyledAnchor size="font-size-m" fontWeight="font-weight-bold">
              {listing.reviews.detail.length}
              &nbsp;reviews
            </StyledAnchor>
            &nbsp;·&nbsp;
            <StyledAnchor size="font-size-m" fontWeight="font-weight-bold">
              {`${listing.address.street}, ${listing.address.country}`}
            </StyledAnchor>
          </Flex>
          <StyledImageWrapper>
            {listing.images.map(
              (image: string, index) =>
                index < 5 && (
                  <img
                    key={uuidv4()}
                    src={image}
                    alt="listing"
                    onClick={handleImageClick}
                  />
                )
            )}
          </StyledImageWrapper>
          <HostInfo>
            <Flex direction="column">
              <StyledLabel size="font-size-xl" fontWeight="font-weight-bold">
                Entire home hosted by {listing.host.host_name}
              </StyledLabel>
              <StyledLabel size="font-size-l" fontWeight="font-weight-normal">
                {listing.accommodates} guests&nbsp;·&nbsp;{listing.bedrooms}
                &nbsp;bedrooms&nbsp;·&nbsp;{listing.beds} beds&nbsp;·&nbsp;
                {listing.bathrooms} baths
              </StyledLabel>
            </Flex>
            <img src={listing.host.host_picture_url} alt="host" />
          </HostInfo>
          <Separator w={'50%'} />
          <Flex direction="column" margin="20px 0">
            <Flex direction="row" gap="5px" margin="10px 0">
              <BsDoorOpen size={25} />
              <Flex direction="column">
                <StyledLabel size="font-size-l" fontWeight="font-weight-bold">
                  Self check-in
                </StyledLabel>
                <StyledLabel
                  size="font-size-m"
                  fontWeight="font-weight-normal"
                  color="neutral-07"
                >
                  You can check in with the doorman.
                </StyledLabel>
              </Flex>
            </Flex>
            <Flex direction="row" gap="5px" margin="10px 0">
              <IoLocationOutline size={25} />
              <Flex direction="column">
                <StyledLabel size="font-size-l" fontWeight="font-weight-bold">
                  Location
                </StyledLabel>
                <StyledLabel
                  size="font-size-m"
                  fontWeight="font-weight-normal"
                  color="neutral-07"
                >
                  Recent guests gave the location a&nbsp;
                  {listing.reviews.review_scores.review_scores_location}-star
                  rating.
                </StyledLabel>
              </Flex>
            </Flex>
            <Flex direction="row" gap="5px" margin="10px 0">
              <IoKeyOutline size={25} />
              <Flex direction="column">
                <StyledLabel size="font-size-l" fontWeight="font-weight-bold">
                  Check-in experience
                </StyledLabel>
                <StyledLabel
                  size="font-size-m"
                  fontWeight="font-weight-normal"
                  color="neutral-07"
                >
                  This place has a&nbsp;
                  {listing.reviews.review_scores.review_scores_checkin}-star
                  rating check-in process.
                </StyledLabel>
              </Flex>
            </Flex>
          </Flex>
          <Separator w={'50%'} />
          <Flex direction="column" margin="20px 0">
            <StyledLabel size="font-size-xl" fontWeight="font-weight-bold">
              What this place offers
            </StyledLabel>
            <Amenities>
              {listing.amenities.map((amenity: string) => (
                <StyledLabel key={uuidv4()} size="font-size-l">
                  {amenity}
                </StyledLabel>
              ))}
            </Amenities>
          </Flex>
          <Separator w={'50%'} />
          <Flex direction="column" margin="20px 0">
            <StyledLabel size="font-size-xl" fontWeight="font-weight-bold">
              <AiFillStar />
              &nbsp;
              {listing.reviews.review_scores.review_scores_rating}
              &nbsp;·&nbsp;
              {listing.reviews.detail.length}&nbsp;reviews
            </StyledLabel>

            <Rating>
              <div>
                <StyledLabel
                  size="font-size-l"
                  fontWeight="font-weight-regular"
                >
                  Cleanliness
                </StyledLabel>
                <progress
                  value={
                    listing.reviews.review_scores.review_scores_cleanliness
                  }
                  max="5"
                ></progress>
              </div>
              <div>
                <StyledLabel
                  size="font-size-l"
                  fontWeight="font-weight-regular"
                >
                  Communication
                </StyledLabel>
                <progress
                  value={
                    listing.reviews.review_scores.review_scores_communication
                  }
                  max="5"
                ></progress>
              </div>
              <div>
                <StyledLabel
                  size="font-size-l"
                  fontWeight="font-weight-regular"
                >
                  Check-in
                </StyledLabel>
                <progress
                  value={listing.reviews.review_scores.review_scores_checkin}
                  max="5"
                ></progress>
              </div>
              <div>
                <StyledLabel
                  size="font-size-l"
                  fontWeight="font-weight-regular"
                >
                  Accuracy
                </StyledLabel>
                <progress
                  value={listing.reviews.review_scores.review_scores_accuracy}
                  max="5"
                ></progress>
              </div>
              <div>
                <StyledLabel
                  size="font-size-l"
                  fontWeight="font-weight-regular"
                >
                  Location
                </StyledLabel>
                <progress
                  value={listing.reviews.review_scores.review_scores_location}
                  max="5"
                ></progress>
              </div>
              <div>
                <StyledLabel
                  size="font-size-l"
                  fontWeight="font-weight-regular"
                >
                  Value
                </StyledLabel>
                <progress
                  value={listing.reviews.review_scores.review_scores_value}
                  max="5"
                ></progress>
              </div>
            </Rating>
            <ReviewUser>
              {listing.reviews.detail.map((review) => (
                <div key={review.id}>
                  <Flex direction="row">
                    <img src={review.reviewer_avatar} />
                    <Flex direction="column">
                      <StyledLabel fontWeight="font-weight-bold">
                        {review.reviewer_name}
                      </StyledLabel>
                      <StyledLabel
                        fontWeight="font-weight-regular"
                        size="font-size-m"
                        color="neutral-07"
                      >
                        {new Date(review.date).toLocaleDateString('en-US', {
                          month: 'long',
                          year: 'numeric',
                        })}
                      </StyledLabel>
                    </Flex>
                  </Flex>
                  <p>{review.comments}</p>
                </div>
              ))}
            </ReviewUser>
          </Flex>
        </DetailWrapper>
      )}
    </Layout>
  )
}

export default Detail
