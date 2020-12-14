const express = require("express");

const PORT = process.env.PORT || 3005;

const app = express();
//stores static assets
app.use(express.static("public"));

app.use(express.urlencoded({extended: true}));
app.use(express.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_control.js");

app.use(routes);

app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
});

