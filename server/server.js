const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("../database/models");
const app = express();

// requests cors info
const corsOptions = {
  origin: "http://localhost:3000"
};

// server port info
const PORT = process.env.PORT || 8080;

// parse requests of cors
app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/api/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

// send app object info to route
var api2 = require("./business/bl_routes.js")(app); 
app.use('/api2', api2);

// set port, listen for requests
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

db.sequelize.sync();