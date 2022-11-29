import { Router } from "express";
import { authUser } from '../controllers/auth.controller.js'

const router = Router()

router.post('/singin', authUser)

export default router