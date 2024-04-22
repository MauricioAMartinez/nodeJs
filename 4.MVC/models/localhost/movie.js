import { randomUUID } from 'crypto'
import { readJSON } from '../../utils/util.js'
const movies = readJSON('../movies.json')

export class MovieModel {
  static async getAll ({ genre, year, director }) {
    if (genre) {
      return this.filterByGenre(genre)
    }
    if (year) {
      return this.filterByYear(year)
    }
    if (director) {
      return this.filterByDirector(director)
    }

    return movies
  }

  static async filterByGenre (genre) {
    return movies.filter(
      movie => movie.genre.some(g => g.toLowerCase() === genre.toLowerCase()))
  }

  static async filterByYear (year) {
    return movies.filter(
      movie => parseInt(movie.year) === parseInt(year))
  }

  static async filterByDirector (director) {
    return movies.filter(
      movie => movie.director.toLowerCase() === director.toLowerCase())
  }

  static async getById (id) {
    const movie = movies.find(movie => movie.id === id)
    if (movie) return movie
  }

  static async create ({ data }) {
    const newMovie = {
      id: randomUUID(),
      ...data
    }
    movies.push(newMovie)
    return newMovie
  }

  static async delete (id) {
    const movieIndex = movies.findIndex(movie => movie.id === id)
    if (movieIndex === -1) return false
    movies.splice(movieIndex, 1)
    return true
  }

  static async update ({ id, input }) {
    const movieIndex = movies.findIndex(movie => movie.id === id)
    if (movieIndex === -1) return false
    const updatedMovie = {
      ...movies[movieIndex],
      ...input
    }
    movies[movieIndex] = updatedMovie
    return updatedMovie
  }
}
