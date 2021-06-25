import express from 'express'
import { crearPersona, eliminarPersona, cantidadPersonas, mostrarPersona, mostrarPersonas } from '../components/persons/controller'

const router = express.Router()

router.get('/', async (_, response, next) => {
  response.send('<h1>Hello World!</h1>')
})

router.get('/api/persons', mostrarPersonas)

router.get('/info', cantidadPersonas)

router.get('/api/persons/:id', mostrarPersona)

router.delete('/api/persons/:id', eliminarPersona)

router.post('/api/persons', crearPersona)

export default router
