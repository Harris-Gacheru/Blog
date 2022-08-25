import express from 'express'
import router from './routes/blog.routes'


const app = express()
const PORT = 3500

app.use('/blog', router)
app.use(express.json())
app.listen(PORT, () => console.log(`App running on port ${PORT}`))