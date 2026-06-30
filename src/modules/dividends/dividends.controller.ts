import { Response } from 'express'
import { AuthRequest } from '@/middleware/auth.middleware'
import * as service from './dividends.service'

export const getAll = async (req: AuthRequest, res: Response) => {
  res.json(await service.getAll(req.user!.id))
}
export const create = async (req: AuthRequest, res: Response) => {
  res.status(201).json(await service.create(req.user!.id, req.body))
}
export const update = async (req: AuthRequest, res: Response) => {
  await service.update(req.params.id as string, req.user!.id, req.body)
  res.json({ message: 'Updated' })
}
export const remove = async (req: AuthRequest, res: Response) => {
  await service.remove(req.params.id as string, req.user!.id)
  res.json({ message: 'Deleted' })
}