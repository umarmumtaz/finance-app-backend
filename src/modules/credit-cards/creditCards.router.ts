// src/modules/credit-cards/creditCards.router.ts
import { Router } from 'express'
import { authMiddleware } from '@/middleware/auth.middleware'
import * as controller from './creditCards.controller'

const router = Router()
router.use(authMiddleware)
router.get('/',                         controller.getAll)
router.post('/',                        controller.create)
router.post('/:id/bills',              controller.addBill)
router.patch('/:id/bills/:billId/pay', controller.payBill)
router.delete('/:id',                  controller.remove)
export default router