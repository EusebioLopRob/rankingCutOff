const dbConfig = require("../config/config.js");
const mongoose = require("mongoose");

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.dburl;

///MODELS FOR USERS AND PERMISSIONS
db.user = require("./user.model.js")(mongoose);
db.roles = require("./user.roles.model.js")(mongoose);

//MODELS FOR RANKING
db.server = require("./server.model.js")(mongoose);
db.rankingRecord = require("./ranking.record.model.js")(mongoose);
db.player = require("./server.player.js")(mongoose);
db.score = require("./server.score.js")(mongoose);


//MODELS FOR ADMIN PANEL
db.app = require("./app.model.js")(mongoose);

module.exports = db;