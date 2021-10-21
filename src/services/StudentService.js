const Student = require('../models/student')

class StudentService {
  // function that return all students
  async findAll() {
    const students = await Student.find()
    return students
  }

  // function that return all students
  async findById({ id }) {
    const student = await Student.findById(id)
    return student
  }

  // function that return id of created students
  async create({
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
  }) {
    const student = new Student({
      name,
      firstLastName,
      secondLastName,
      ci,
      tellphone,
      cellphone,
      email,
      city,
      invoice: {
        name: invoice.name,
        nit: invoice.nit
      },
      payment: {
        urlFile: payment.urlFile,
        dateOfPay: payment.dateOfPay
      }
    })
    const { id } = await student.save()
    return id
  }

  // function that return id of updated students
  async update({
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
  }) {
    const { id: userFindedId } = await Student.findByIdAndUpdate(id, {
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
    return userFindedId
  }
}

module.exports = StudentService
