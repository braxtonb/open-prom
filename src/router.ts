import express from 'express'
import BooksRouter from './routes/books/books.router'

const router = (app: express.Application) => {
  app.use('/api/books', BooksRouter)
  app.get('/', (req: express.Request, res: express.Response) => {
    return res.status(200).send('Hello world!')
  })
}

export default router
