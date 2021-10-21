const express = require('express')
const fileUpload = require('express-fileupload')
const cors = require('cors')
const path = require('path')
require('./database')

// routers
const crudGeneric = require('./routes/CrudRouters')
const fileRouter = require('./routes/FilesRoutes')
const { baseDirName } = require('../conts')

const app = express()

// middleware
app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(fileUpload())

// routers
app.use(express.static(path.join(baseDirName, 'public', 'LandingPage')))
app.get('/register', function (_, res) {
  res.sendFile(path.join(baseDirName, 'public', 'Form', 'index.html'))
})

app.use(express.static(path.join(baseDirName, 'public', 'Form')))
app.use('/public/uploads', express.static(path.join(baseDirName, 'public', 'uploads')))

app.use('/public', express.static(path.join(baseDirName + '/public')))
app.use('/api', fileRouter)
app.use('*', (_, res) => res.redirect('/'))
crudGeneric(app)

module.exports = app
