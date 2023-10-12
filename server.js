const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const { MongoClient, ObjectId } = require("mongodb");

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

    app.get("/users", async (req, res) => {
      const users = await usersCollection.find().toArray();
      res.send(users);
    });

    app.get("/users/updateUser/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await usersCollection.findOne(query);
      res.send(result);
    });

    app.post("/users", async (req, res) => {
      const user = req.body;
      const result = await usersCollection.insertOne(user);
      console.log(`A user create with _id: ${result.insertedId}`);
      // res.status(200).send(`user created successfully, ${result}`);
      res.send(result);
    });

    app.put("/users/updateUser/:id", async (req, res) => {
      const id = req.params.id;
      const user = req.body;
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const updatedUser = {
        $set: {
          name: user.name,
          email: user.email
        }
      }
      const result = await usersCollection.updateOne(filter, updatedUser, options);
      console.log(
        `${result.matchedCount} document(s) matched the filter, updated ${result.modifiedCount} document(s)`
      );
      res.send(result);
    });

    app.delete("/users/deleteOne/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await usersCollection.deleteOne(query);
      console.log(`User deleted with _id: ${id}`);
      res.send(result);
    });

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("You have successfully connected to MongoDB!");
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
