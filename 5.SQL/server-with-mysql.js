import { createAPP } from './app.js'
import { MovieModel } from './models/mysql/movie.js'

createAPP({ movieModel: MovieModel })
