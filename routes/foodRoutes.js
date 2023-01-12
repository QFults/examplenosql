const router = require("express").Router();
const { Food } = require("../models");

router.get("/foods", async (req, res) => {
  try {
    const foods = await Food.find({});
    res.json(foods);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/foods/:id", async (req, res) => {
  try {
    const food = await Food.findById(req.params.id);
    res.json(food);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/foods", async (req, res) => {
  try {
    const food = await Food.create(req.body);
    res.json(food);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put("/foods/:id", async (req, res) => {
  try {
    await Food.findByIdAndUpdate(req.params.id, req.body);
    res.sendStatus(200);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/foods/:id", async (req, res) => {
  try {
    await Food.findByIdAndDelete(req.params.id);
    res.sendStatus(200);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
