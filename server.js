const express = require("express");
const mongodb = require("mongodb").MongoClient;

const app = express();

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

let db;

mongodb.connect(
  "mongodb://localhost/foods_db",
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err, client) => {
    db = client.db();
    app.listen(3001);
  }
);

app.post('/foods', (req, res) => {
  db.collection('foods')
    .insertOne(req.body, (err, results) => {
      if (err) throw err
      res.json(results)
    })
})

app.get("/foods", (req, res) => {
  db.collection("foods")
    .find()
    .toArray((err, results) => {
      if (err) throw err;
      res.json(results);
    });
});
