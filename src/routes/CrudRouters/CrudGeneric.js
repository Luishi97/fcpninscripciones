const { Router } = require('express')

function CrudGenericRouter(collectionService) {
  const router = Router()
  // find all registers
  router.get('/', async (_, res) => {
    try {
      const docs = await collectionService.findAll()
      res.status(200).json({
        data: docs,
        message: 'Listado de registros'
      })
    } catch (err) {
      res.status(400).json({
        data: [],
        message: 'Error al obtener el listado de registros ' + err
      })
      console.log('Error al obtener todos los registros ' + err)
    }
  })

  // find one register data
  router.get('/:id', async (req, res) => {
    const { id } = req.params
    try {
      const doc = await collectionService.findById({ id })
      res.status(200).json({
        data: doc,
        message: 'Registro encontrado'
      })
    } catch (err) {
      res.status(400).json({
        data: {},
        message: 'Error al obtener el registro'
      })
      console.log('Error al obtener el registro ' + err)
    }
  })

  // create one doc
  router.post('/', async (req, res) => {
    const docData = req.body
    try {
      const doc = await collectionService.create({ docData })
      if (!doc)
        res.status(400).json({
          data: {},
          message: 'El carnet ya esta registrado'
        })
      res.status(200).json({
        data: doc,
        message: 'Registro creado con exito'
      })
    } catch (err) {
      res.status(400).json({
        data: {},
        message: 'Error al crear el registro'
      })
      console.log('Error al crear al registro ' + err)
    }
  })

  // update one doc
  router.put('/:id', async (req, res) => {
    const { id } = req.params
    const dataForUpdate = req.body
    try {
      const doc = await collectionService.update({
        id,
        dataForUpdate
      })
      res.status(200).json({
        data: doc,
        message: 'Registro actualizado con exito'
      })
    } catch (err) {
      res.status(400).json({
        data: {},
        message: 'Error al actualizar el registro'
      })
      console.log('Error al actualizar al registro ' + err)
    }
  })

  router.delete('/:id', async (req, res) => {
    try {
      const { id } = req.params
      const docId = await collectionService.delete({ id })
      res.status(200).json({
        data: docId,
        message: 'Registro eliminado con exito'
      })
    } catch (err) {
      res.status(400).json({
        data: {},
        message: 'Error al eliminar el registro'
      })
      console.log('Error al eliminar al registro ' + err)
    }
  })

  return router
}

module.exports = CrudGenericRouter
