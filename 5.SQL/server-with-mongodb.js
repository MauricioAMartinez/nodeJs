import { createAPP } from './app.js'
import { MovieModel } from './models/mongodb/movie.js'

createAPP({ movieModel: MovieModel })
