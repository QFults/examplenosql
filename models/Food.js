const { model, Schema } = require("mongoose");

const ingredientSchema = new Schema({
  name: { type: String, required: true },
  quantity: Number
})

const Food = model(
  "Food",
  new Schema({
    name: { type: String, required: true },
    calories: Number,
    ingredients: [ingredientSchema]
  })
);

module.exports = Food;
