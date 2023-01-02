import axios from 'axios'

const axiosClient = axios.create({
  baseURL: `https://tedmem.loca.lt/`,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

export default axiosClient
