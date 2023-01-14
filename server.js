const express = require("express");
const app = express();
require("dotenv").config();
const db = require("./config/db");
const userRoute = require('./routes/userRoutes');
const uploadCSVRoute = require('./routes/uploadCSVRoute')
const cors = require("cors");

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb" }));
app.use(cors());

app.use("/api/users", userRoute);
// app.use("/api/csv", uploadCSVRoute);

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`backend is running on port ${port}`);
});
