import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://blog-mern-server-zvw0.onrender.com',
})

instance.interceptors.request.use((config) => {
  config.headers.Authorization =
    'Bearer ' + window.localStorage.getItem('token') || ''

  return config
})

export default instance
