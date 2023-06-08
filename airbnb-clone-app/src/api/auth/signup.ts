import axios from 'axios'
import { faker } from '@faker-js/faker'
import { SignupParams, UserResponse } from './types'

const baseUrl = process.env.VITE_API_URL

export const signup = async (params: SignupParams) => {
  const avatar = faker.image.avatar()
  const { data } = (await axios.post(`${baseUrl}/signup`, {
    ...params,
    avatar,
  })) as { data: UserResponse }
  return data
}
