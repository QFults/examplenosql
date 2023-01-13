const { model, Schema } = require("mongoose");

const ingredientSchema = new Schema({
  name: { type: String, required: true },
  quantity: Number,
});

const Ingredient = model("Ingredient", ingredientSchema);

module.exports = Ingredient;
