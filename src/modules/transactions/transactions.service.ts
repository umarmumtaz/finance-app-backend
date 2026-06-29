// src/modules/transactions/transactions.service.ts
import { prisma } from '@/config/db'
import { TransactionType } from '@prisma/client'

export const getAllTransactions = (userId: string) =>
  prisma.transaction.findMany({
    where:   { userId },
    orderBy: { date: 'desc' },
  })

export const getTransactionById = (id: string, userId: string) =>
  prisma.transaction.findFirst({
    where: { id, userId },
  })

export const createTransaction = (
  userId: string,
  data: {
    type:         TransactionType
    amount:       number
    category:     string
    description?: string
    date:         string
  }
) =>
  prisma.transaction.create({
    data: {
      userId,
      ...data,
      date: new Date(data.date),
    },
  })

export const updateTransaction = (
  id: string,
  userId: string,
  data: Partial<{
    type:        TransactionType
    amount:      number
    category:    string
    description: string
    date:        string
  }>
) =>
  prisma.transaction.updateMany({
    where: { id, userId },
    data:  {
      ...data,
      ...(data.date && { date: new Date(data.date) }),
    },
  })

export const deleteTransaction = (id: string, userId: string) =>
  prisma.transaction.deleteMany({
    where: { id, userId },
  })