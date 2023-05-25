import axios from 'axios'
import { Listing } from './types'

const baseUrl = import.meta.env.VITE_API_URL

export const getAll = async () => {
  const { data } = (await axios.get(`${baseUrl}/listing`)) as {
    data: Listing[]
  }
  return data
}

export const getPage = async (page: number, query: string) => {
  const { data } = (await axios.get(`${baseUrl}/listing${
    query ? `${query}&` : '?'
  }_page=${page}
  
  `)) as {
    data: Listing[]
  }
  return data
}
