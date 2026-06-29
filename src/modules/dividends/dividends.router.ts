// src/modules/dividends/dividends.router.ts
import { Router } from 'express'
import { authMiddleware } from '@/middleware/auth.middleware'
import * as controller from './dividends.controller'

const router = Router()
router.use(authMiddleware)
router.get('/',     controller.getAll)
router.post('/',    controller.create)
router.put('/:id',  controller.update)
router.delete('/:id', controller.remove)
export default router