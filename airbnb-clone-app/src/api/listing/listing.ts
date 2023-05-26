import axios from 'axios'
import { Listing } from './types'

const baseUrl = import.meta.env.VITE_API_URL

export const getAll = async () => {
  const { data } = (await axios.get(`${baseUrl}/listing`)) as {
    data: Listing[]
  }
  return data
}

export const getPage = async (query: any) => {
  const { data, headers } = await axios.get(`${baseUrl}/listing/`, {
    params: query ? query : {},
  })
  return [data, headers['x-total-count']] as [Listing[], number]
}
