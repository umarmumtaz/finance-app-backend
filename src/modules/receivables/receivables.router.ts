// src/modules/receivables/receivables.router.ts
import { Router } from 'express'
import { authMiddleware } from '@/middleware/auth.middleware'
import * as controller from './receivables.controller'

const router = Router()
router.use(authMiddleware)
router.get('/',                    controller.getAll)
router.post('/',                   controller.create)
router.put('/:id',                 controller.update)
router.patch('/:id/mark-received', controller.markReceived)
router.delete('/:id',              controller.remove)
export default router