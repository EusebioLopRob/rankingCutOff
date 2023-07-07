// Imports
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./app/models");
const app = express();
const seeder = require("./app/config/seeder/seeder");

//environment variables
const basePath = process.env.API_URL_BASE_PATH;
const PORT = process.env.API_PORT || 8081;

/////////////////////////
///// SERVES CONFIG /////
/////////////////////////
// Use CORS
app.use(cors());

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// Welcome page
app.get(basePath, (req, res) => {
  res.json({ message: "Welcome to Bonodere API" });
});

// Listener
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});

//////////////////////////
///// DATABASE CHECK /////
//////////////////////////
db.mongoose
.connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log("Conectado con la base de datos " + db.url);
    seeder.checkDatabase();
})
.catch(err => {
    console.log("Cannot connect to the database!");
    console.log(err)
    process.exit();
});

