const mongoose = require('mongoose')
const Schema = mongoose.Schema

const foodSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    retail_price: { type: String, required: true },
    vendor_price: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = mongoose.model('Food', foodSchema)
