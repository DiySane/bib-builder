const express = require("express");
const mongoose = require("mongoose");
const Router = require("./routes");
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

// const username = "dwaipayan.sn%40gmail.com";
const username = "root";
// const password = "Dwai%40Mongodb";
const password = "root";
const cluster = "cluster0.fgngz";
const dbname = "myFirstDatabase";

mongoose.connect(
  `mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${dbname}?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    // useFindAndModify: false,
    useUnifiedTopology: true,
  }
);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

app.use(Router);

app.listen(5000, () => {
  console.log("Server is running at port 5000");
});
