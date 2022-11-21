import { Router } from "express";
import { getPomvideo, getPomvideos, createPomvideo, updatePomvideo, deletePomvideo } from '../controllers/pomvideos.controller.js'

const router = Router()

router.get('/pomvideos', getPomvideos)

router.get('/pomvideos/:id', getPomvideo)

router.post('/pomvideos', createPomvideo)

router.patch('/pomvideos/:id', updatePomvideo) //actualiza especifico
// router.put('/pomvideos/:id', updatePomvideo) actualiza parcialmente

router.delete('/pomvideos/:id', deletePomvideo)

export default router

