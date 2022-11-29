import { Router } from "express";
import { authUser } from '../controllers/auth.controller.js'
import jwt from "jsonwebtoken"

const router = Router()

router.post('/singin', authUser)

router.post('/test', verifayToken, (req, res) => {
    res.json('Informacion Secreta')
})

function verifayToken(req, res, next) {
    if (!req.headers.authorization) return res.status(401).json('No autorizado');

    const token = req.headers.authorization.substr(7);
    if (token != '') {
        const content = jwt.verify(token, process.env.KEY)
        req.data = content;
        next()
    }else{
        res.status(401).json('Token invalido')
    }
}

export default router