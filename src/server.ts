import express from 'express'
import promBundle from 'express-prom-bundle'
import { json } from 'body-parser'
import cors from 'cors'
import router from './router'

const app = express()
const metricsMiddleware = promBundle({
  includeMethod: true,
  includePath: true,
})

// metrics setup
app.use(metricsMiddleware)

// request setup
app.use(cors())

// response middleware
app.use(json({ type: '*/*' }))

// static file and router setup
// app.use(express.static(join(__dirname, 'static')));
router(app)

export default app
