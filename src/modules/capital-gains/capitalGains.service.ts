// src/modules/capital-gains/capitalGains.service.ts
import { prisma } from '@/config/db'

export const getAll  = (userId: string) => prisma.capitalGain.findMany({ where: { userId }, orderBy: { soldAt: 'desc' } })
export const create  = (userId: string, data: { ticker: string; buyPrice: number; sellPrice: number; quantity: number; soldAt: string; notes?: string }) =>
  prisma.capitalGain.create({ data: { userId, ...data, soldAt: new Date(data.soldAt) } })
export const update  = (id: string, userId: string, data: any) => prisma.capitalGain.updateMany({ where: { id, userId }, data })
export const remove  = (id: string, userId: string) => prisma.capitalGain.deleteMany({ where: { id, userId } })