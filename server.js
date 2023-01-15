const express = require("express");
const app = express();
require("dotenv").config();
const db = require("./config/db");
app.use(express.json());
// var axios = require("axios").default;
const axios = require("axios");

// const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://latest-stock-price.p.rapidapi.com/price',
  params: {Indices: 'NIFTY 50'},
  headers: {
    'X-RapidAPI-Key': 'e247af8dc7msh89f63f09cebed06p19dbbdjsn7ac29b02e373',
    'X-RapidAPI-Host': 'latest-stock-price.p.rapidapi.com'
  }
};

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`backend is running fine on port ${port}`);
});

