// src/modules/credit-cards/creditCards.service.ts
import { prisma } from '@/config/db'

export const getAllCards = (userId: string) =>
  prisma.creditCard.findMany({ where: { userId }, include: { bills: true } })

export const createCard = (userId: string, data: { issuer: string; lastFour: string; creditLimit: number }) =>
  prisma.creditCard.create({ data: { userId, ...data } })

export const addBill = (creditCardId: string, data: { amount: number; dueDate: string }) =>
  prisma.bill.create({ data: { creditCardId, ...data, dueDate: new Date(data.dueDate) } })

export const markBillPaid = (id: string) =>
  prisma.bill.update({ where: { id }, data: { paid: true, paidAt: new Date() } })

export const deleteCard = (id: string, userId: string) =>
  prisma.creditCard.deleteMany({ where: { id, userId } })