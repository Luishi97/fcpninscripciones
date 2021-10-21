const { model, Schema } = require('mongoose')

const student = new Schema(
  {
    name: { type: String, required: true, uppercase: true },
    firstLastName: { type: String, required: true, uppercase: true },
    secondLastName: { type: String, uppercase: true },
    ci: { type: String, required: true, trim: true, index: true, unique: true, sparse: true },
    tellphone: { type: Number },
    cellphone: { type: Number },
    email: { type: String, required: true, uppercase: true },
    city: { type: String, required: true },
    invoice: {
      name: { type: String, required: true, uppercase: true },
      nit: { type: String, required: true }
    },
    payment: {
      urlFile: { type: String, required: true },
      dateOfPay: { type: Date, required: true }
    }
  },
  { timestamps: true, versionKey: false }
)

// student.index({''})

module.exports = model('student', student)

// "name": "Luis Alejandro",
//     "apPaterno": "Sardinas",
//     "apMaterno": "Chambilla",
//     "ci": 6959087,
//     "tellphone": 2217511,
//     "email": "luisardi15@gmail.com",
//     "city": "La Paz",x|
//     "invoice": {
//       "name": "Luis Sardinas",
//       "nit": 6959087,
//     },
//     "payment": {
//       "urlFile": "url",
//       "dateOfPay": "14/10/2021",
//     },
