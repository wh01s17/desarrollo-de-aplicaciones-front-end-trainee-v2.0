import { create } from 'axios'

export const api = create({
  baseURL: 'https://api.tvmaze.com',
  timeout: 5000,
})
