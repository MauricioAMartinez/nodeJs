import cors from 'cors'
const ACCEPTED_ORIGINS = [
  'http://localhost:8080',
  'http://localhost:8081',
  'https://myapp.com']
export const corsMiddleware = ({ acceptedOrigins = ACCEPTED_ORIGINS } = {}) => cors({
  origin: (origin, calback) => {
    if (acceptedOrigins.includes(origin)) {
      return calback(null, true)
    }
    if (!origin) {
      return calback(null, true)
    }

    return calback(new Error('Not allowed by CORS'))
  }
})
