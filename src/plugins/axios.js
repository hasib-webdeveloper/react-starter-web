import axios from "axios"

const apiBaseUrl = process.env.REACT_APP_API_BASE_URL

const api = axios.create({
  baseURL: apiBaseUrl || 'http://localhost:3333'
})

// Request handler
api.interceptors.request.use(async function (config) {
  // Do something before request is sent
  //  Add auth token
  const token = localStorage.getItem('auth_token')
  config.headers.common.Authorization = `Bearer ${token || ''}`

  return config
}, function (error) {
  // Do something with request error
  return Promise.reject(error)
})

// Response handler
api.interceptors.response.use(function (config) {
  return config
}, async function (error) {
  if (error.response?.status === 401) {
    localStorage.removeItem('token')
  }

  return Promise.reject(error)
}
)


export {
  axios,
  api
}