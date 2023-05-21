import axios from 'axios'
import { LoginParams, UserResponse } from './types'

const baseUrl = import.meta.env.VITE_API_URL

export const login = async (params: LoginParams) => {
  const { data } = (await axios.post(`${baseUrl}/login`, params)) as {
    data: UserResponse
  }
  return data
}
