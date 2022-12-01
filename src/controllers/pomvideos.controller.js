import { pool } from "../db.js"

export const getPomvideos = async (req, res) => {

    try {
        const [rows] = await pool.query('SELECT * FROM b9dw0vobstpr7etg0eho.pomvideo where estado <> 0')
        res.send(rows)
    } catch (error) {
        return res.status(500).json({
            message: 'Something goes wrong' + error
        })
    }
}

export const getPomvideo = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM b9dw0vobstpr7etg0eho.pomvideo where id = ?', [req.params.id])
        if (rows.length <= 0) return res.status(404).json({
            message: 'Video not found'
        })

        res.json(rows[0])
    } catch (error) {
        return res.status(500).json({
            message: 'Something goes wrong' + error
        })
    }
}

export const createPomvideo = async (req, res) => {
    try {
        const { nombre, descripcion, url, usuario } = req.body
        const estado = 1
        const fechaRegistro = new Date()
        const [rows] = await pool.query('insert into b9dw0vobstpr7etg0eho.pomvideo (nombre, descripcion, url, estado, usuario, fecha) VALUES(?,?,?,?,?,?)', [nombre, descripcion, url, estado, usuario, fechaRegistro])

        res.send({
            id: rows.insertId,
            nombre
        })
    } catch (error) {
        return res.status(500).json({
            message: 'Something goes wrong' + error
        })
    }
}

export const updatePomvideo = async (req, res) => {
    try {
        const { id } = req.params
        const { nombre, descripcion, url, usuario } = req.body
        const [result] = await pool.query('update b9dw0vobstpr7etg0eho.pomvideo set nombre = IFNULL(?, nombre), descripcion =IFNULL(?, descripcion), url = IFNULL(?, url), usuario = IFNULL(?, usuario)', [nombre, descripcion, url, usuario])

        if (result.affectedRows <= 0) return res.status(404).json({
            message: 'Video not found'
        })

        const [rows] = await pool.query('SELECT * FROM b9dw0vobstpr7etg0eho.pomvideo where id = ?', [req.params.id])

        res.json(rows[0])
    } catch (error) {
        return res.status(500).json({
            message: 'Something goes wrong' + error
        })
    }
}

export const deletePomvideo = async (req, res) => {
    try {
        const [result] = await pool.query('update b9dw0vobstpr7etg0eho.pomvideo set estado = 0 where id = ?', [req.params.id])

        if (result.affectedRows <= 0) {
            return res.status(404).json({
                message: 'Video not found'
            })
        }

        res.sendStatus(204)
    } catch (error) {
        return res.status(500).json({
            message: 'Something goes wrong' + error
        })
    }
}