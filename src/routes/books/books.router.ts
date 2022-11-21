import { Router } from 'express'
import { handleBooks } from './books.controller'

const BooksRouter = Router()

// layer path /api/books
BooksRouter.get('/', handleBooks)

export default BooksRouter
