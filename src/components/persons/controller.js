import MongoPersonRepository from './infraestructure/MongoPersonRepository'
import crearPersona from './application/crearPersona'
import mostrarPersonas from './application/mostrarPersonas'
import mostrarPersona from './application/mostrarPersona'
import eliminarPersona from './application/eliminarPersona'
import { schemaName } from './domain/validate'

const PersonRepository = new MongoPersonRepository()


export const mostrarPersonas = async (_, res, next) => {
  try {
    const query = listarPersonas({ PersonRepository })
    const person = await query()
    res.status(200).json({
      data: person,
      message: 'Listado de personas realizado'
    })
  } catch (e) {
    next(e)
  }
}

export const cantidadPersonas = async (_, res, next) => {
  try {
    const query = listarPersonas({ PersonRepository })
    const person = await query()
    res.status(200).send('<p>Hay ' + person.length + ' personas</p>' +
    '<p>' + new Date(Date.parse('2012-01-26T13:51:50.417-07:00')) + '</p>')
  } catch (e) {
    next(e)
  }
}

export const mostrarPersona = async (req, res, next) => {
  try {
    const id = Number(req.params.id)
    const query = mostrarPersona({ PersonRepository })
    const person = await query(id)
    res.status(200).json(person)
  } catch (e) {
    next(e)
  }
}

export const eliminarPersona = async (req, res, next) => {
  try {
    const id = Number(req.params.id)
    const query = eliminarPersona({ PersonRepository })
    await query(id)
    res.status(204).end()
  } catch (e) {
    next(e)
  }
}

export const crearPersona = async (req, res, next) => {
  try {
    const query = crearPersona({ PersonRepository })
    await schemaName.validateAsync(req.body)
    const person = await query(req.body)
    res.status(201).json({
      data: person,
      message: 'Persona creada correctamente'
    })
  } catch (e) {
    next(e)
  }
}
