// src/modules/dividends/dividends.service.ts
import { prisma } from '@/config/db'

export const getAll  = (userId: string) => prisma.dividend.findMany({ where: { userId }, orderBy: { receivedAt: 'desc' } })
export const create  = (userId: string, data: { ticker: string; amount: number; receivedAt: string; notes?: string }) =>
  prisma.dividend.create({ data: { userId, ...data, receivedAt: new Date(data.receivedAt) } })
export const update  = (id: string, userId: string, data: any) => prisma.dividend.updateMany({ where: { id, userId }, data })
export const remove  = (id: string, userId: string) => prisma.dividend.deleteMany({ where: { id, userId } })