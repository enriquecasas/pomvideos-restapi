import { pool } from "../db.js"
import jwt from "jsonwebtoken"

export const authUser = async (req, res) => {
    try {
        const { usuario, clave } = req.body
        const [rows] = await pool.query('SELECT userName, roleId FROM b9dw0vobstpr7etg0eho.user where userName=? and pass=?',[usuario,clave])

        if (rows.length > 0) {
            let data = JSON.stringify(rows[0]);
            console.log(data)
            const token = jwt.sign(data, process.env.KEY)
            res.json({token})
        }else{
            res.json('Usuario o clave incorrecta')
            // return res.status(404).json({
            //     message: 'User not found'
            // })
        }
    } catch (error) {
        return res.status(500).json({
            message: 'Something goes wrong ' + error
        })
    }
}