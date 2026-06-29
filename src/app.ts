// src/app.ts
import express      from 'express'
import cors         from 'cors'
import dotenv       from 'dotenv'
import routes       from '@/routes/index'
import { errorMiddleware } from '@/middleware/error.middleware'

dotenv.config()

const app  = express()
const PORT = process.env.PORT ?? 3000

app.use(cors({ origin: 'http://localhost:5173', credentials: true }))
app.use(express.json())

app.get('/health', (_, res) => res.json({ status: 'ok' }))
app.use('/api', routes)
app.use(errorMiddleware)

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})