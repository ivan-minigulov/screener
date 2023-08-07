#!/usr/bin/env node

require('dotenv').config()
const express = require('express')
const sequelize = require('./db')
const sequelizeUsers = require('./dbUsers')
const models = require('./models/models')
const modelsUsers = require('./models/modelsUsers')
const cors = require('cors')
const router = require('./routes/index')
const errorHandler = require('./middleware/ErrorHandlingMiddleware')
const cookieParser = require('cookie-parser')

const PORT = process.env.PORT || 5000

const app = express()

app.use(
  cors({
    credentials: true,
    origin: process.env.CLIENT_URL,
  })
)
// express.json()это встроенная промежуточная функция в Express, начиная с версии 4.16.0.
//Он анализирует входящие запросы JSON и помещает проанализированные данные в файлы req.body.
app.use(express.json())
// Промежуточное ПО будет анализировать Cookie
// заголовок запроса и предоставлять данные cookie как свойство req.cookies
app.use(cookieParser())
app.use('/api', router)

//Обработка ошибок должна быть в конце, последний Middleware
app.use(errorHandler)

const start = async () => {
  try {
    await sequelize.authenticate()
    await sequelize.sync()
    await sequelizeUsers.authenticate()
    await sequelizeUsers.sync()
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
  } catch (e) {
    console.log(e)
  }
}

start()

// const startMongo = async () => {
//     try {
//         await mongoose.connect(process.env.DB_MONGO_URL, {
//             useNewUrlParser: true,
//             useUnifieldTopology: true,
//         })
//         app.listen(PORT_MONGO, () => console.log(`Server started on port ${PORT_MONGO}`))
//     } catch (e) {
//         console.log(e)
//     }
// }

// startMongo()
