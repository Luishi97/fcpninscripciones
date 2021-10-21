const crudGenericRouter = require('./CrudGeneric')
const CrudServicesRouter = require('../../services/CrudsServices')

function CrudRouters(app) {
  const crudServicesRouter = new CrudServicesRouter()
  crudServicesRouter.cruds.forEach(({ collService, name }) => {
    app.use(`/api/${name}`, crudGenericRouter(collService))
  })
}

module.exports = CrudRouters
