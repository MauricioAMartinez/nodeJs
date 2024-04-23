import mysql from 'mysql2/promise'
import dotenv from 'dotenv'

dotenv.config()

const config = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT
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
