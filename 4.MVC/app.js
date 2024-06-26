import express, { json } from 'express'
import { moviesRouter } from './routes/movies.js'
import { corsMiddleware } from './middlewares/cors.js'

const app = express()
app.use(json())
app.use(corsMiddleware())
app.disable('x-powered-by')

const PORT = process.env.PORT || 3000

app.use('/movies', moviesRouter)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
