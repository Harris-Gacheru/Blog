import express from 'express'

import mssql from 'mssql'
import sqlConfig from './config/sqlconfig'

const app = express()
const PORT = 3500

app.listen(PORT, () => console.log(`App running on port ${PORT}`))