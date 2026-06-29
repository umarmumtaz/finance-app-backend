// src/routes/index.ts
import { Router } from 'express'
import transactionsRouter from '@/modules/transactions/transactions.router'
import creditCardsRouter  from '@/modules/credit-cards/creditCards.router'
import dividendsRouter    from '@/modules/dividends/dividends.router'
import capitalGainsRouter from '@/modules/capital-gains/capitalGains.router'
import receivablesRouter  from '@/modules/receivables/receivables.router'

const router = Router()

router.use('/transactions',  transactionsRouter)
router.use('/credit-cards',  creditCardsRouter)
router.use('/dividends',     dividendsRouter)
router.use('/capital-gains', capitalGainsRouter)
router.use('/receivables',   receivablesRouter)

export default router