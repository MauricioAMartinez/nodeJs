import { MovieModel } from '../models/movieModelMongo.js'
import { validateMovie, validatePartialMovie } from '../schemas/movies.js'

export class MovieController {
  static async getAll (req, res) {
    const { year, director, genre } = req.query
    const movies = await MovieModel.getAll({ genre, year, director })
    res.json(movies)
  }

  static async getById (req, res) {
    const { id } = req.params
    const movie = await MovieModel.getById(id)
    if (movie) return res.json(movie)
    res.status(404).json({ message: 'Movie not found' })
  }

  static async create (req, res) {
    const result = validateMovie(req.body)
    if (result.error) {
      return res.status(400).json({ message: result.error.errors })
    }
    const newMovie = await MovieModel.create({ input: result.data })
    res.status(201).json(newMovie)
  }

  static async delete (req, res) {
    const { id } = req.params
    const deleted = await MovieModel.delete(id)
    if (deleted) return res.status(204).end()
    res.status(404).json({ message: 'Movie not found' })
  }

  static async update (req, res) {
    const result = validatePartialMovie(req.body)

    if (result.error) {
      return res.status(400).json({ message: result.error.errors })
    }

    const { id } = req.params
    const updatedMovie = await MovieModel.update({ id, input: result.data })

    return res.json(updatedMovie)
  }
}
