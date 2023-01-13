const { model, Schema } = require("mongoose");

const foodSchema = new Schema(
  {
    name: { type: String, required: true },
    calories: Number,
    ingredients: [
      {
        type: Schema.Types.ObjectId,
        ref: "Ingredient",
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

foodSchema.virtual("ingredientCount").get(function () {
  return this.ingredients.length;
});

const Food = model("Food", foodSchema);

module.exports = Food;
