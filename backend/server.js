require("dotenv").config();
const bodyParser = require("body-parser");

const express = require("express");
const mongoose = require("mongoose");
const mailRoutes = require("./routes/messages");

// express app
const app = express();
app.use(bodyParser.json());

// middleware
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});


// routes
app.use('/api/messages', mailRoutes)

//connect to db and listen for requests 
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('connected to database')
    // listen to port
    app.listen(process.env.PORT, () => {
      console.log('listening for requests on port', process.env.PORT)
    })
  })
  .catch((err) => {
    console.log(err)
  }) 
