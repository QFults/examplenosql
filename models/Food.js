const { model, Schema } = require('mongoose')

const Food = model('Food', new Schema({
  name: { type: String, required: true },
  calories: Number
}))

module.exports = Food
