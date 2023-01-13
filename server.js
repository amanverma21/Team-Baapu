const express = require('express');
const app = express();
require('dotenv').config();
const db = require("./config/db");
app.use(express.json());


const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`backend is running fine on port ${port}`);
});