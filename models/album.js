//bringin in mongoose and schema
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

//getting song
let song = require('./song');

let AlbumeSchema = new Schema({
	artistName : String,
	name : String,
	releaseDate : String,
	song : [song.schema],
	genres : [String]

});

let	Album = mongoose.model('Album', AlbumeSchema);

module.exports = Album;