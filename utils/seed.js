const db = require("../config");
const { Ingredient, Food } = require("../models");

db.once("open", async () => {
  // await Ingredient.deleteMany({})
  await Food.deleteMany({});

  await Food.insertMany([
    {
      name: "Burger 1",
      calories: 500,
      ingredients: ["63c1a84bf32a5dfa92e99b16", "63c1a84bf32a5dfa92e99b17"],
    },
    {
      name: "Burger 2",
      calories: 1000,
      ingredients: [
        "63c1a84bf32a5dfa92e99b16",
        "63c1a84bf32a5dfa92e99b17",
        "63c1a84bf32a5dfa92e99b18",
      ],
    },
    {
      name: "Burger 3",
      calories: 1500,
      ingredients: [
        "63c1a84bf32a5dfa92e99b16",
        "63c1a84bf32a5dfa92e99b17",
        "63c1a84bf32a5dfa92e99b18",
        "63c1a84bf32a5dfa92e99b19",
      ],
    },
  ]);

  // await Ingredient.insertMany([
  //   {
  //     name: 'lettuce',
  //     quantity: 20
  //   },
  //   {
  //     name: 'bacon',
  //     quantity: 30
  //   },
  //   {
  //     name: 'cheese',
  //     quantity: 40
  //   },
  //   {
  //     name: 'tomato',
  //     quantity: 50
  //   }
  // ])
});
