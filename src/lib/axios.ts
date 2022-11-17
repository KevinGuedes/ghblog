import axios from 'axios'

const accessToken: string = import.meta.env.VITE_GIT_HUB_ACCESS_TOKEN

export const api = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    Authorization: accessToken ? `Bearer ${accessToken}` : '',
  },
})
