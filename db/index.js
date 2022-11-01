const mongoose = require('mongoose')
require('dotenv').config()

let dbURL =
  process.env.NODE_env === 'production'
    ? process.env.MONGODB_URI
    : 'mongodb://127.0.0.1:27017/TCTPFE'
console.log(process.env.MONGODB_URI)
mongoose
  .connect(
    'mongodb+srv://TCTPFE:123@tctpfe.6gop5pn.mongodb.net/?retryWrites=true&w=majority'
  )
  .then(() => {
    console.log('Successfully connected to MongoDB.')
  })
  .catch((e) => {
    console.error('Connection error', e.message)
  })

const db = mongoose.connection

module.exports = db
