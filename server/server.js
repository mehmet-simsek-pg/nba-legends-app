const express = require("express");
const app = express();
const players = require("./routes/PlayerRoutes");
const connectDB = require("./db/connect");
require("dotenv").config();
const notFound = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");
const mongoose = require("mongoose");
const cors = require("cors");

const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
  port: 10000,
};

app.use(cors(corsOptions)); // Use this after the variable declaration

// middleware
app.use(express.json());

// routes
app.use("/api/v1", players);

app.use(notFound);
app.use(errorHandlerMiddleware);
const portLocal = 5000;

const start = async () => {
  try {
    mongoose.set("strictQuery", false);
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () =>
      console.log(`Server is listening on port ${portLocal}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
