const mongoose = require('mongoose')
const config = require('./config')

// const DB_URL = `mongodb://${config.DB_USER}:${config.DB_PASSWORD}@${config.DB_HOST}:${config.DB_PORT}/${config.DB_NAME}`
const DB_URL = `mongodb://${config.DB_HOST}:${config.DB_PORT}/${config.DB_NAME}`
mongoose
  .connect(DB_URL, {
    user: config.DB_USER,
    pass: config.DB_PASSWORD,
  })
  .then(() => console.log('Connected to database'))
  .catch(err => console.log('Error to connect ' + err))
