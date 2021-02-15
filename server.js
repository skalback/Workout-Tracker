const express = require("express");
const logger = require('morgan');
const mongoose = require("mongoose");


const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger('dev'));
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

// routes
const htmlRoutes = require('./routes/html-routes')
const apiRoutes = require('./routes/api-routes')
app.use('/', htmlRoutes)
app.use('/api', apiRoutes)

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});