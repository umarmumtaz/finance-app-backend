// src/modules/receivables/receivables.service.ts
import { prisma } from '@/config/db'
import { ReceivableStatus } from '@prisma/client'

export const getAll  = (userId: string) => prisma.receivable.findMany({ where: { userId }, orderBy: { createdAt: 'desc' } })
export const create  = (userId: string, data: { personName: string; amount: number; dueDate?: string; notes?: string }) =>
  prisma.receivable.create({ data: { userId, ...data, ...(data.dueDate && { dueDate: new Date(data.dueDate) }) } })
export const update  = (id: string, userId: string, data: any) => prisma.receivable.updateMany({ where: { id, userId }, data })
export const markReceived = (id: string, userId: string) =>
  prisma.receivable.updateMany({ where: { id, userId }, data: { status: ReceivableStatus.RECEIVED } })
export const remove  = (id: string, userId: string) => prisma.receivable.deleteMany({ where: { id, userId } })