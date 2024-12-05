const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require('body-parser');
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(bodyparser.json());
app.use(express.json());
app.use(cors({
  origin:"https://crudproject-frontend-kbdp.onrender.com",
  methods:['GET','POST','PUT','DELETE']
}));

const port = process.env.PORT || 3006;
const url = process.env.CONNECTION_URL;

mongoose
  .connect(url)
  .then((result) => {
    console.log(`Successfully database connected`);
  })
  .catch((err) => {
    console.log(`Error has occured in database connection ${err.message}`);
  });

app.listen(port, (e) => {
  if (e) {
    console.log(`Error has occured in port connection ${e.message}`);
  } else {
    console.log(`Successfully port ${port} connected`);
  }
});

const MainCrudRoute = require('./routes/Crud');
const SecondCrudRoute = require('./routes/CrudTwo');
const ThirdCrudRoute = require('./routes/CrudThree');


app.use('/main-api', MainCrudRoute);
app.use('/second-api', SecondCrudRoute);
app.use('/third-api', ThirdCrudRoute);
app.use('/fourth', MainCrudRoute);
