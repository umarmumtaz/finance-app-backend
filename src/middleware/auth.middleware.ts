// src/middleware/auth.middleware.ts
import { Request, Response, NextFunction } from 'express'
import { adminAuth } from '@/config/firebase'
import { prisma } from '@/config/db'

export interface AuthRequest extends Request {
  user?: {
    id:          string
    firebaseUid: string
    email:       string | null
  }
}

export const authMiddleware = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const authHeader = req.headers.authorization

    if (!authHeader?.startsWith('Bearer ')) {
      res.status(401).json({ message: 'No token provided' })
      return
    }

    const token = authHeader.split(' ')[1]
    const decoded = await adminAuth.verifyIdToken(token)

    let user = await prisma.user.findUnique({
      where: { firebaseUid: decoded.uid },
    })

    if (!user) {
      user = await prisma.user.create({
        data: {
          firebaseUid: decoded.uid,
          email:       decoded.email ?? '',
          displayName: decoded.name ?? null,
          photoURL:    decoded.picture ?? null,
        },
      })
    }

    req.user = {
      id:          user.id,
      firebaseUid: user.firebaseUid,
      email:       user.email,
    }

    next()
  } catch (err) {
    res.status(401).json({ message: 'Invalid or expired token' })
  }
}