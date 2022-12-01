import { pool } from "../db.js"
import jwt from "jsonwebtoken"

export const authUser = async (req, res) => {
    try {
        const { usuario, clave } = req.body
        const [rows] = await pool.query('SELECT userName, roleId FROM b9dw0vobstpr7etg0eho.user where userName=? and pass=?',[usuario,clave])

        if (rows.length > 0) {
            let data = JSON.stringify(rows[0]);
            const token = jwt.sign(data, process.env.KEY)
            // res.json({token})
            res.status(201).json({
                token: token,
                message: 'ok'
            })
        }else{
            // res.json('Usuario o clave incorrecta')
            res.status(201).json({
                token: '',
                message: 'Usuario o clave incorrecta'
            })
        }
    } catch (error) {
        return res.status(500).json({
            message: 'Something goes wrong ' + error
        })
    }
}