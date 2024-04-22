import { createAPP } from './app'
import { createMovieModel } from './models/mysql/movie.js'

createAPP({ movieModel: createMovieModel() })
