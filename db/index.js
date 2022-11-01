const mongoose = require('mongoose')
require('dotenv').config()

let dbURL =
  process.env.NODE_env === 'production'
    ? 'mongodb+srv://TCTPFE:123@tctpfe.6gop5pn.mongodb.net/?retryWrites=true&w=majority'
    : 'mongodb://127.0.0.1:27017/TCTPFE'

mongoose
  .connect(dbURL)
  .then(() => {
    console.log('Successfully connected to MongoDB.')
  })
  .catch((e) => {
    console.error('Connection error', e.message)
  })

const db = mongoose.connection

module.exports = db
