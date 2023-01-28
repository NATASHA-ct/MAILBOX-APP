require("dotenv").config();

const express = require("express");
const mailRoutes = require("./routes/messages");

// express app
const app = express();

// middleware
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});


// routes
app.use('/api/messages', mailRoutes)

// listen for requests
app.listen(process.env.PORT, () => {
  console.log("listening on port", process.env.PORT);
});
