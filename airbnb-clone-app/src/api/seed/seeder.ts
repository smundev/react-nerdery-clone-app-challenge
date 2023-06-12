import { faker } from '@faker-js/faker'
import * as fs from 'fs'

import { Listing } from '../listing/types'

export const property_types = [
  'Beachfront',
  'Cabins',
  'Amazing Pools',
  'Amazing views',
  'Tropical',
  'National Parks',
  'Lake',
  'Countryside',
  'Trending',
  'Camping',
  'Tiny Homes',
  'Castles',
  'Design',
  'OMG!',
  'New',
  'Mansions',
  'Lakefront',
  'Surfing',
  'Luxe',
  'Vineyards',
  'Iconic cities',
  'Farms',
  'Treehouses',
  'Skiing',
  'Top of the world',
  'A-frames',
  'Windmills',
  'Modern',
  'Islands',
  'Caves',
  'Arctic',
]

export const cancellation_policy = ['flexible', 'moderate', 'strict']

export const property_amenities = [
  'TV',
  'Cable TV',
  'Wifi',
  'Kitchen',
  'Paid parking off premises',
  'Smoking allowed',
  'Pets allowed',
  'Buzzer/wireless intercom',
  'Heating',
  'Family/kid friendly',
  'Washer',
  'Coffee maker',
  'Refrigerator',
  'Dishwasher',
  'Dishes and silverware',
  'Cooking basics',
  'Oven',
  'Stove',
  'Cleaning before checkout',
  'Waterfront',
]
export const host_interests = [
  'Arts',
  'Cooking',
  'Dancing',
  'Design',
  'Fashion',
  'Film',
  'Fitness',
  'Food',
  'Gardening',
  'Health',
  'Music',
  'Photography',
  'Politics',
  'Reading',
  'Sports',
  'Technology',
  'Travel',
  'Volunteering',
  'Writing',
]

export const languages = [
  'English',
  'Spanish',
  'French',
  'Chinese',
  'Korean',
  'Japanese',
  'German',
  'Italian',
  'Portuguese',
]

export const country_codes = ['US', 'MX', 'GT', 'SA']

export const house_rules = ['No smoking', 'No pets', 'No parties or events']

const generateFakeListing = (): Listing => ({
  id: faker.string.uuid(),
  listing_url: faker.internet.url(),
  name: faker.person.fullName(),
  summary: faker.lorem.sentence(),
  house_rules: faker.helpers.arrayElements(house_rules),
  property_type: faker.helpers.arrayElement(property_types),
  minimum_nights: faker.number.int({ min: 1, max: 7 }),
  maximum_nights: faker.number.int({ min: 7, max: 30 }),
  cancellation_policy: faker.helpers.arrayElement(cancellation_policy),
  accommodates: faker.number.int({ min: 1, max: 10 }),
  bedrooms: faker.number.int({ min: 1, max: 5 }),
  beds: faker.number.int({ min: 1, max: 10 }),
  bathrooms: faker.number.float({ min: 1, max: 5, precision: 0.5 }),
  amenities: faker.helpers.arrayElements(property_amenities),
  price: faker.number.float({ min: 50, max: 300, precision: 0.01 }),
  security_deposit: faker.number.float({
    min: 100,
    max: 500,
    precision: 0.01,
  }),
  cleaning_fee: faker.number.float({ min: 20, max: 100, precision: 0.01 }),
  extra_people: faker.number.int({ min: 10, max: 50 }),
  guests_included: faker.number.int({ min: 1, max: 10 }),
  images: [
    faker.image.urlLoremFlickr({ category: 'city' }),
    faker.image.urlLoremFlickr({ category: 'city' }),
    faker.image.urlLoremFlickr({ category: 'city' }),
    faker.image.urlLoremFlickr({ category: 'city' }),
    faker.image.urlLoremFlickr({ category: 'city' }),
    faker.image.urlLoremFlickr({ category: 'city' }),
  ],
  address: {
    street: faker.location.streetAddress(),
    suburb: faker.location.city(),
    country: faker.location.country(),
    country_code: faker.helpers.arrayElement(country_codes),
    location: {
      type: 'Point',
      coordinates: faker.location.nearbyGPSCoordinate(),
      is_location_exact: faker.datatype.boolean(),
    },
  },
  host: {
    host_id: faker.string.uuid(),
    host_url: faker.internet.url(),
    host_name: faker.person.fullName(),
    host_location: faker.location.city(),
    hosting_experience_years: faker.number.int({ min: 1, max: 10 }),
    host_about: faker.lorem.paragraph(),
    host_response_time: faker.helpers.arrayElement([
      'within an hour',
      'within a day',
      'within a week',
    ]),
    host_thumbnail_url: faker.image.avatar(),
    host_picture_url: faker.image.avatar(),
    host_school: faker.lorem.words(),
    host_fun_fact: faker.person.zodiacSign(),
    host_breakfast: faker.lorem.slug(),
    host_work_info: faker.person.jobArea(),
    host_fav_song: faker.lorem.slug(),
    host_languages: faker.helpers.arrayElements(languages),
    host_home_unique: faker.lorem.sentence(),
    host_birth_info: faker.date.birthdate().toString(),
    host_obssession: faker.lorem.sentence(),
    host_response_rate: faker.number.int({ min: 0, max: 100 }),
    host_is_superhost: faker.datatype.boolean(),
    host_has_profile_pic: faker.datatype.boolean(),
    host_identity_verified: faker.datatype.boolean(),
    host_listings_count: faker.number.int({ min: 1, max: 10 }),
    host_total_listings_count: faker.number.int({ min: 1, max: 10 }),
    host_interests: faker.helpers.arrayElements(host_interests),
    host_verifications: {
      identity_verified: faker.datatype.boolean(),
      email_verified: faker.datatype.boolean(),
      phone_verified: faker.datatype.boolean(),
    },
  },
  reviews: {
    review_id: faker.string.uuid(),
    review_scores: {
      review_scores_accuracy: faker.number.float({
        min: 1,
        max: 5,
        precision: 0.1,
      }),
      review_scores_cleanliness: faker.number.float({
        min: 1,
        max: 5,
        precision: 0.1,
      }),
      review_scores_checkin: faker.number.float({
        min: 1,
        max: 5,
        precision: 0.1,
      }),
      review_scores_communication: faker.number.float({
        min: 1,
        max: 5,
        precision: 0.1,
      }),
      review_scores_location: faker.number.float({
        min: 1,
        max: 5,
        precision: 0.1,
      }),
      review_scores_value: faker.number.float({
        min: 1,
        max: 5,
        precision: 0.1,
      }),
      review_scores_rating: faker.number.float({
        min: 1,
        max: 5,
        precision: 0.1,
      }),
    },
    detail: [
      {
        id: faker.string.uuid(),
        date: faker.date.past().toString(),
        reviewer_id: faker.string.uuid(),
        reviewer_name: faker.person.fullName(),
        reviewer_avatar: faker.image.avatar(),
        comments: faker.lorem.paragraph(),
      },
      {
        id: faker.string.uuid(),
        date: faker.date.past().toString(),
        reviewer_id: faker.string.uuid(),
        reviewer_name: faker.person.fullName(),
        reviewer_avatar: faker.image.avatar(),
        comments: faker.lorem.paragraph(),
      },
      {
        id: faker.string.uuid(),
        date: faker.date.past().toString(),
        reviewer_id: faker.string.uuid(),
        reviewer_name: faker.person.fullName(),
        reviewer_avatar: faker.image.avatar(),
        comments: faker.lorem.paragraph(),
      },
    ],
  },
})

export const exportSeededData = () => {
  const randomListing: Listing[] = Array.from(
    { length: 200 },
    generateFakeListing
  )

  fs.writeFileSync(
    'src/api/data/listing.json',
    JSON.stringify(randomListing, null, 2)
  )
  console.log(`Listing data saved to listing.json`)
}
