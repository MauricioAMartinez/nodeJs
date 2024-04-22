import mysql from 'mysql2/promise'

const config = {
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'moviesdb',
  port: 3306
}

const contection = await mysql.createConnection(config)

export class MovieModel {
  static async getAll ({ genre }) {
    const [movies] = await contection.query(
      'select title, year, director, duration, poster, rate, BIN_TO_UUID(id) id from movie')

    return movies
  }

  static async getById ({ id }) {
    const [movies] = await contection.query(
      'select title, year, director, duration, poster, rate, BIN_TO_UUID(id) id from movie where id = ?',
      [id]
    )
    return movies[0]
  }

  static async create ({ input }) {
  }

  static async delete ({ id }) {

  }

  static async update ({ id, input }) {

  }
}
