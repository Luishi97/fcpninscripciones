const StudentService = require('../services/StudentService')
const { Router } = require('express')

const router = Router()
const studentService = new StudentService()

// find all students
router.get('/', async (_, res) => {
  try {
    const student = await studentService.findAll()
    res.status(200).json({
      data: student,
      message: 'lista de alumnos'
    })
  } catch (err) {
    console.log('Error al obtener todos los estudiantes ' + err)
  }
})

// find one student data
router.get('/:id', async (req, res) => {
  const { studentId: id } = req.params
  try {
    const student = await studentService.findById({ id })
    res.status(200).json({
      data: student,
      message: 'alumno encontrado'
    })
  } catch (err) {
    res.status(400).json({
      data: {},
      message: 'Error al obtener el estudiante'
    })
    console.log('Error al obtener el estudiante ' + err)
  }
})

// create one student
router.post('/', async (req, res) => {
  const {
    name,
    firstLastName,
    secondLastName,
    ci,
    tellphone,
    cellphone,
    email,
    city,
    invoice,
    payment
  } = req.body
  try {
    const student = await studentService.create({
      name,
      firstLastName,
      secondLastName,
      ci,
      tellphone,
      cellphone,
      email,
      city,
      invoice,
      payment
    })
    res.status(200).json({
      data: student,
      message: 'Alumno creado con exito'
    })
  } catch (err) {
    res.status(400).json({
      data: {},
      message: 'Error al crear el alumno'
    })
    console.log('Error al crear al alumno ' + err)
  }
})

// update one student
router.put('/', async (req, res) => {
  const {
    id,
    name,
    firstLastName,
    secondLastName,
    ci,
    tellphone,
    cellphone,
    email,
    city,
    invoice,
    payment
  } = req.body
  try {
    const student = await studentService.update({
      id,
      name,
      firstLastName,
      secondLastName,
      ci,
      tellphone,
      cellphone,
      email,
      city,
      invoice,
      payment
    })
    res.status(200).json({
      data: student,
      message: 'Alumno creado con exito'
    })
  } catch (err) {
    console.log('Error al crear al alumno ' + err)
  }
})

module.exports = router
