const CrudGeneric = require('./CrudGeneric')

const Student = require('../../models/student')
const User = require('../../models/user')

const ModelCollections = [
  { coll: Student, name: 'students' },
  { coll: User, name: 'users' }
]

class CrudsServices {
  constructor() {
    this.cruds = ModelCollections.map(({ coll, name }) => {
      return { collService: new CrudGeneric(coll), name }
    })
  }
}

module.exports = CrudsServices
