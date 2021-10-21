const { Router } = require('express')
const path = require('path')
const fs = require('fs')
const { v4: uuidv4 } = require('uuid')
const { baseDirName } = require('../../conts')

const router = Router()

router.get('/file/:path', (req, res) => {
  try {
    const { path: pathFile } = req.params

    const file = fs.createReadStream(path.join(baseDirName, pathFile))
    const stat = fs.statSync(path.join(baseDirName, pathFile))
    res.setHeader('Content-Length', stat.size)
    res.setHeader('Content-Type', 'application/pdf')
    res.setHeader('Content-Disposition', 'attachment; filename=quote.pdf')
    file.pipe(res)
  } catch (err) {
    res.status(400).send({ data: {}, message: err })
    console.log('Error al eliminar el archivo ', err)
  }
})

router.post('/upload', (req, res) => {
  console.log('req.files', req.files)
  const file = req.files.file

  const fileType = file.mimetype.split('/')[1]
  const fileName = uuidv4() + '.' + fileType
  const pathSave = path.join(baseDirName, 'public/uploads/', fileName)

  file.mv(pathSave, err => {
    if (err) return res.status(400).send({ data: {}, message: err })
    res.status(200).send({
      data: { url: `/public/uploads/${fileName}`, fileName },
      message: 'Agregado correctamente'
    })
  })
})

router.delete('/upload/:path', (req, res) => {
  try {
    const { path: pathFile } = req.params
    fs.unlinkSync(path.join(baseDirName, 'public/uploads', pathFile))

    res.status(200).send({ data: {}, message: 'Archivo eliminado' })
  } catch (err) {
    res.status(400).send({ data: {}, message: err })
    console.log('Error al eliminar el archivo ', err)
  }
})

module.exports = router
