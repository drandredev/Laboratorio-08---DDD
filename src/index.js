// const express = require('express')
const express = require('express')
import apiAgenda from './routes/agenda.js'
import helmet from 'helmet'
import morgan from 'morgan'

const app = express()
app.use(morgan('common'))
app.use(helmet())

app.use(express.json())

app.use('/', apiAgenda)

app.use((req, res, next) => {
  res.status(404).send('<h1 style="color: red;">¿Te peridste? Vuelve atrás :)</h1>')
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Estoy corriendo en ${PORT}`)
})
