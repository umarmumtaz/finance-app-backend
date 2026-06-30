import { Response } from 'express'
import { AuthRequest } from '@/middleware/auth.middleware'
import * as service from './transactions.service'

export const getAll = async (req: AuthRequest, res: Response) => {
  res.json(await service.getAllTransactions(req.user!.id))
}
export const getOne = async (req: AuthRequest, res: Response) => {
  const data = await service.getTransactionById(req.params.id as string, req.user!.id)
  if (!data) { res.status(404).json({ message: 'Not found' }); return }
  res.json(data)
}
export const create = async (req: AuthRequest, res: Response) => {
  res.status(201).json(await service.createTransaction(req.user!.id, req.body))
}
export const update = async (req: AuthRequest, res: Response) => {
  await service.updateTransaction(req.params.id as string, req.user!.id, req.body)
  res.json({ message: 'Updated' })
}
export const remove = async (req: AuthRequest, res: Response) => {
  await service.deleteTransaction(req.params.id as string, req.user!.id)
  res.json({ message: 'Deleted' })
}