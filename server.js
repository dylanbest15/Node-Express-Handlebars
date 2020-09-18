// dependencies
const express = require("express");

// connect to server
const PORT = process.env.PORT || 8080;
const app = express();

// express functions
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// get handlebars
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// get routes
var routes = require("./controllers/burger_controller.js");
app.use(routes);

// start server
app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});