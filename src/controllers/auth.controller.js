import { pool } from "../db.js"
import jwt from "jsonwebtoken"

export const authUser = async (req, res) => {
    try {
        const { usuario, clave } = req.body
        const [rows] = await pool.query('SELECT * FROM b9dw0vobstpr7etg0eho.user where userName=? and pass=?',[usuario,clave])

        if (rows.length <= 0) return res.status(404).json({
            message: 'User not found'
        })

        let data = JSON.stringify(rows[0]);
        console.log(data)
        const token = jwt.sign(data, process.env.KEY)
        res.json({token})

    } catch (error) {
        return res.status(500).json({
            message: 'Something goes wrong ' + error
        })
    }
}