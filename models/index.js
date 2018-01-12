var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/tunely");

//bringing in and exporting modules 
module.exports.Song = require('./song');
module.exports.Album = require('./album');
