const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

//Middleware
app.use(bodyParser.json());
app.use(cors());

//Routes Imports
const setupRoutes = require("./routes/setup");
const transactionsRoutes = require("./routes/transactions");
const walletRoutes = require("./routes/wallet");
const transactRoutes = require("./routes/transact");

//ROUTES
app.use("/setup", setupRoutes);

app.use("/transact", transactRoutes);

app.use("/transactions", transactionsRoutes);

app.use("/wallet", walletRoutes);

//Connect to DB
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => {
  console.log("connected to db");
});

//SERVER START
app.listen(3000);
