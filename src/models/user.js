const { model, Schema } = require('mongoose')

const user = new Schema(
  {
    name: { type: String, required: true },
    userName: { type: String, required: true },
    password: { type: String, required: true }
  },
  { timestamps: true, versionKey: false }
)

module.exports = model('users', user)
