const express = require("express");
const app = express();
const cors = require("cors");
const { MongoClient } = require("mongodb");

app.use(cors());
app.use(express.json());

const uri = process.env["MONGO_URI"];

const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    const usersCollection = client.db("usersDB").collection("users");

    app.get("/", (req, res) => {
      res.send("Hello from server");
    });
  } catch (error) {
    console.log(error);
  } finally {
  }
}

run().catch(console.dir);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`server running at ${port}`);
});
