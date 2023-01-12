const express = require("express");
const { MongoClient: mongodb, ObjectId } = require("mongodb");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(require('./routes'))

let db;

mongodb.connect(
  "mongodb://localhost/foods_db",
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err, client) => {
    db = client.db();
    app.listen(3001);
  }
);

app.post("/foods", (req, res) => {
  db.collection("foods").insertOne(req.body, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

app.get("/foods", (req, res) => {
  db.collection("foods")
    .find()
    .toArray((err, results) => {
      if (err) throw err;
      res.json(results);
    });
});

app.put("/foods/:id", (req, res) => {
  db.collection("foods").updateOne(
    { _id: ObjectId(req.params.id) },
    { $set: req.body },
    (err, results) => {
      if (err) throw err;
      res.send(
        results.modifiedCount ? "Document updated" : "No document updated"
      );
    }
  );
});

app.delete("/foods/:id", (req, res) => {
  db.collection("foods").deleteOne(
    { _id: ObjectId(req.params.id) },
    (err, results) => {
      if (err) throw err;
      res.send(
        results.deletedCount ? "Document deleted" : "No document deleted"
      );
    }
  );
});
