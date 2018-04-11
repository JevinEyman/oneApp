const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");


var PORT = process.env.PORT || 3000;


var app = express();
var router = express.Router();;

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
 res.setHeader(‘Access-Control-Allow-Origin’, ‘*’);
 res.setHeader(‘Access-Control-Allow-Credentials’, ‘true’);
 res.setHeader(‘Access-Control-Allow-Methods’, ‘GET,HEAD,OPTIONS,POST,PUT,DELETE’);
 res.setHeader(‘Access-Control-Allow-Headers’, ‘Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers’);
 res.setHeader(‘Cache-Control’, ‘no-cache’);
 next();
});


require("./routes/htmlRoutes.js")(app);
require("./routes/apiRoutes.js")(app);

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI, {
  useMongoClient: true
});


app.listen(PORT, function() {
  console.log("Listening on port: " + PORT);
});