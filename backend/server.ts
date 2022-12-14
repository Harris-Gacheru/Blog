import express from 'express'
import cors from 'cors'
import router from './routes/blog.routes'


const app = express()
const PORT = 3500

app.use(express.json())
app.use(cors())
app.use('/blogs', router)
app.listen(PORT, () => console.log(`App running on port ${PORT}`))