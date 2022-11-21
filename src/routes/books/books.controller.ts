import express from 'express'

export const handleBooks = async (
  req: express.Request,
  res: express.Response,
) => {
  try {
    const data = ['A Song of Ice and Fire', 'Harry Potter', 'Lord of the Rings']
    return res.status(200).send({ message: 'Retrieved books', data })
  } catch (error) {
    const errorMsg = 'Error retrieving books'
    console.error(errorMsg, error)

    return res.status(500).send({ message: errorMsg, data: [] })
  }
}
