// src/app.ts
import express      from 'express'
import cors         from 'cors'
import dotenv       from 'dotenv'
import routes       from '@/routes/index'
import { errorMiddleware } from '@/middleware/error.middleware'
dotenv.config()

const app  = express()
const PORT = process.env.PORT ?? 3000

app.use(cors({ origin: '*', credentials: true }))
app.use(express.json())

// Root route
app.get('/', (_, res) => {
  res.json({
    message: 'Finance App API',
    version: '1.0.0',
    status:  'running',
    endpoints: {
      health:       'GET  /health',
      transactions: 'GET  /api/transactions',
      creditCards:  'GET  /api/credit-cards',
      dividends:    'GET  /api/dividends',
      capitalGains: 'GET  /api/capital-gains',
      receivables:  'GET  /api/receivables',
    }
  })
})

// Health check
app.get('/health', (_, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() })
})

// All API routes
app.use('/api', routes)

// Global error handler
app.use(errorMiddleware)

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`)
})