import express from "express"
import pomvideoRoutes from './routes/pomvideo.routes.js'
import indexRoutes from './routes/index.routes.js'
import authUser from './routes/auth.routes.js'
import cors from 'cors';

const app = express()
app.use(cors())
app.use(express.json())
app.use(indexRoutes)
app.use(authUser)


app.use('/api', pomvideoRoutes)

app.use((req, res, next) => {
    res.status(404).json({
        message: 'Endpoint not found'
    })
})

export default app;