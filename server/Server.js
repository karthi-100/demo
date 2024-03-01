var express = require("express");
var app = express();
require("dotenv").config();
var cors = require("cors");
app.use(cors());
var { MongoClient, ServerApiVersion } = require("mongodb");
const uri = process.env.MONGO_URL;
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

app.get("/workouts", async (req, res) => {
  const db = client.db("Workouts");
  const data = await db.collection("Exercise").find().toArray();
  res.json(data);
});

app.get("/BodyParts", async (req, res) => {
  const db = client.db("BodyParts");
  const data = await db.collection("Parts").find().toArray();
  res.json(data);
  console.log(data);
});

app.listen(3000);
