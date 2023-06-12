import axios, { AxiosRequestConfig } from 'axios'
import { WishListParams, WishList } from './types'

const baseUrl = process.env.VITE_API_URL

export const getWishList = async (params: WishListParams, token: string) => {
  const url = `${baseUrl}/660/wishlist`
  const headers = {
    Authorization: `Bearer ${token}`,
  }
  const config: AxiosRequestConfig<any> = {
    params,
    headers,
  }

  const { data } = (await axios.get(url, config)) as {
    data: WishList[]
  }

  return data
}

export const addToWishList = async (params: WishListParams, token: string) => {
  const url = `${baseUrl}/660/wishlist`
  const header = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const response = await axios.post(url, params, header)
  return response
}

export const removeFromWishList = async (
  params: WishListParams,
  token: string
) => {
  const url = `${baseUrl}/660/wishlist/${params.id}`
  const headers = {
    Authorization: `Bearer ${token}`,
  }
  const config: AxiosRequestConfig<any> = {
    params,
    headers,
  }
  const response = await axios.delete(url, config)
  return response
}
