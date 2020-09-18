const express = require("express");
const mongoose = require("mongoose");
const app = express();
const api = require("./api");
const bodyParser = require("body-parser");
const cors = require("cors");

const password = "czNWW1cIDYgu7Lfj";

app.use(cors());
app.use(bodyParser.json());
app.use("/", api);

async function start() {
  try {
    await mongoose.connect(
      `mongodb+srv://chetverykanton92:${password}@cluster0.r4q3j.azure.mongodb.net/todo-items`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
      }
    );
    app.listen(5000, () => {
      console.log("Server has been started...");
    });
  } catch (error) {
    console.log(error);
  }
}

start();
