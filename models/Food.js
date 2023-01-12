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

// Food.insertMany([
//   {
//     name: 'food1',
//     calories: Math.floor(Math.random() * 1000),
//     ingredients: []
//   },
//   {
//     name: 'food2',
//     calories: Math.floor(Math.random() * 1000),
//     ingredients: []
//   },
//   {
//     name: 'food3',
//     calories: Math.floor(Math.random() * 1000),
//     ingredients: []
//   },
//   {
//     name: 'food4',
//     calories: Math.floor(Math.random() * 1000),
//     ingredients: []
//   },
//   {
//     name: 'food5',
//     calories: Math.floor(Math.random() * 1000),
//     ingredients: []
//   }
// ])

module.exports = Food;
