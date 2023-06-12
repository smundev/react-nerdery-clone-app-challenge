export type Image = Array<string>

type LocationCoordinates = [number, number]

interface Location {
  type: string
  coordinates: LocationCoordinates
  is_location_exact: boolean
}

interface Address {
  street: string
  suburb: string
  country: string
  country_code: string
  location: Location
}

interface HostVerifications {
  identity_verified: boolean
  email_verified: boolean
  phone_verified: boolean
}

interface Host {
  host_id: string
  host_url: string
  host_name: string
  host_location: string
  hosting_experience_years?: number
  host_about?: string
  host_response_time?: string
  host_thumbnail_url?: string
  host_picture_url?: string
  host_school?: string
  host_fun_fact?: string
  host_breakfast?: string
  host_work_info: string
  host_fav_song?: string
  host_languages?: string[]
  host_home_unique?: string
  host_birth_info?: string
  host_obssession?: string
  host_response_rate?: number
  host_is_superhost?: boolean
  host_has_profile_pic?: boolean
  host_identity_verified?: boolean
  host_listings_count?: number
  host_total_listings_count?: number
  host_interests?: string[]
  host_verifications?: HostVerifications
}

interface ReviewScores {
  review_scores_accuracy: number
  review_scores_cleanliness: number
  review_scores_checkin: number
  review_scores_communication: number
  review_scores_location: number
  review_scores_value: number
  review_scores_rating: number
}

interface ReviewDetail {
  id: string
  date: string
  reviewer_id: string
  reviewer_name: string
  reviewer_avatar: string
  comments: string
}

interface Reviews {
  review_id: string
  review_scores: ReviewScores
  detail: ReviewDetail[]
}

export type Listing = {
  id: string
  listing_url: string
  name: string
  summary: string
  house_rules: string[]
  property_type: string
  minimum_nights: number
  maximum_nights: number
  cancellation_policy: string
  accommodates: number
  bedrooms: number
  beds: number
  bathrooms: number
  amenities: string[]
  price: number
  security_deposit: number
  cleaning_fee: number
  extra_people: number
  guests_included: number
  images: Image
  address: Address
  host: Host
  reviews: Reviews
}
