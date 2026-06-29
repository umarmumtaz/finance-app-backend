// src/modules/receivables/receivables.controller.ts
import { Response } from 'express'
import { AuthRequest } from '@/middleware/auth.middleware'
import * as service from './receivables.service'

export const getAll       = async (req: AuthRequest, res: Response) => res.json(await service.getAll(req.user!.id))
export const create       = async (req: AuthRequest, res: Response) => res.status(201).json(await service.create(req.user!.id, req.body))
export const update       = async (req: AuthRequest, res: Response) => { await service.update(req.params.id, req.user!.id, req.body); res.json({ message: 'Updated' }) }
export const markReceived = async (req: AuthRequest, res: Response) => res.json(await service.markReceived(req.params.id, req.user!.id))
export const remove       = async (req: AuthRequest, res: Response) => { await service.remove(req.params.id, req.user!.id); res.json({ message: 'Deleted' }) }