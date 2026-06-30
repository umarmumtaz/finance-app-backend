import { Response } from 'express'
import { AuthRequest } from '@/middleware/auth.middleware'
import * as service from './creditCards.service'

export const getAll = async (req: AuthRequest, res: Response) => {
  res.json(await service.getAllCards(req.user!.id))
}
export const create = async (req: AuthRequest, res: Response) => {
  res.status(201).json(await service.createCard(req.user!.id, req.body))
}
export const addBill = async (req: AuthRequest, res: Response) => {
  res.status(201).json(await service.addBill(req.params.id as string, req.body))
}
export const payBill = async (req: AuthRequest, res: Response) => {
  res.json(await service.markBillPaid(req.params.billId as string))
}
export const remove = async (req: AuthRequest, res: Response) => {
  await service.deleteCard(req.params.id as string, req.user!.id)
  res.json({ message: 'Deleted' })
}