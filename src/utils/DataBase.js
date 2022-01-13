// const { MongoClient } = require("mongodb");
// // import { MongoClient } from "mongodb";
// const uri =
//   // "mongodb+srv://dwaipayan.sn@gmail.com:Dwai@Mongodb@cluster0.fgngz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
//   "mongodb+srv://dwaipayan.sn%40gmail.com%3ADwai%40Mongodb@cluster0.fgngz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// const client = new MongoClient(uri, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// });
/* const connectv1 = () => {
  const { MongoClient } = require("mongodb");
  // import { MongoClient } from "mongodb";
  const uri =
    // "mongodb+srv://dwaipayan.sn@gmail.com:Dwai@Mongodb@cluster0.fgngz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
    // "mongodb+srv://dwaipayan.sn%40gmail.com%3ADwai%40Mongodb@cluster0.fgngz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
    "mongodb+srv://dwaipayan.sn%40gmail.com%3ADwai%40Mongodb@cluster0.fgngz.mongodb.net?retryWrites=true&w=majority";
  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  client.connect((err) => {
    const collection = client.db("myFirstDatabase").collection("blogs");
    console.log(collection.count);
    // perform actions on the collection object
    client.close();
  });
};

const connectv2 = async () => {
  const { MongoClient } = require("mongodb");
  // or as an es module:
  // import { MongoClient } from 'mongodb'

  // Connection URL
  const url =
    "mongodb://dwaipayan.sn%40gmail.com%3ADwai%40Mongodb@cluster0.fgngz.mongodb.net/?retryWrites=true&w=majority";
  const client = new MongoClient(url);

  // Database Name
  const dbName = "myFirstDatabase";

  async function main() {
    // Use connect method to connect to the server
    // await client.connect();
    client
      .connect()
      .then(console.log)
      .catch((e) => {
        console.log(e.stack);
        client.close();
      });
    // .finally(() => client.close());
    console.log("Connected successfully to server");
    const db = client.db(dbName);
    const collection = db.collection("blogs");

    // the following code examples can be pasted here...

    const insertResult = await collection.insertMany([
      { a: 1 },
      { a: 2 },
      { a: 3 },
    ]);
    console.log("Inserted documents =>", insertResult);

    return "done.";
    // return collection;
  }

  main()
    .then(console.log)
    .catch((e) => console.log(e.stack))
    .finally(() => client.close());
};

const connectv3 = () => {
  var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://dwaipayan.sn%40gmail.com%3ADwai%40Mongodb@cluster0.fgngz.mongodb.net/myFirstDatabase/?retryWrites=true&w=majority";

MongoClient.connect(url, function(err, db) {

    var cursor = db.collection('blogs').find();

    cursor.each(function(err, doc) {

        console.log(doc);

    });
});
} */

// import mongoose from "mongoose";
// import { connect }  from 'mongoose';

const connectToMongo = async () => {
  // const express = require("express");
  const mongoose = require("mongoose");
  // const Router = require("./routes")

  // const app = express();

  // app.use(express.json());

  const username = "dwaipayan.sn%40gmail.com";
  const password = "Dwai%40Mongodb";
  const cluster = "cluster0.fgngz";
  const dbname = "myFirstDatabase";

  await mongoose.connect(
    `mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${dbname}?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    }
  );
  // const db = mongoose.connection;
  // db.on("error", console.error.bind(console, "connection error: "));
  // db.once("open", function () {
  //   console.log("Connected successfully");
  // });
};

export { connectToMongo };
