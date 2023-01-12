const express = require('express')
const db = require('./config')

const app = express()

const { Food } = require('./models')

app.get('/foods', async (req, res) => {
  try {
    const foods = await Food.find({})
    res.json(foods)
  } catch (err) {
    res.status(500).json(err)
  }
})

db.once('open', () => app.listen(3001))
