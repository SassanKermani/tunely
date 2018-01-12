//getting mongoose 
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//schema
let SongSchema = new Schema({
	name : String,
	trackNumber : Number
})

//model
let Song = mongoose.model('Song', SongSchema);

//sending it to the index
module.exports = Song;
