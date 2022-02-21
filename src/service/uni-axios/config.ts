let BASE_URL = ''
const TIME_OUT = 10000
if (process.env.NODE_ENV === 'development') {
  BASE_URL = 'http://152.136.185.210:7878/api/hy66'
} else if (process.env.NODE_ENV === 'production') {
  BASE_URL = 'production'
} else {
  BASE_URL = 'text'
}

export { BASE_URL, TIME_OUT }