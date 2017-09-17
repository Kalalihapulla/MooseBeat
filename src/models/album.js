const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const autoIncrement = require('mongoose-auto-increment');
const connection = mongoose.createConnection('mongodb://root:root@ds131914.mlab.com:31914/moosebeat');
autoIncrement.initialize(connection);

// create a schema  unique: true 
var albumSchema = new Schema({
  
  title: { type: String, required: true},
  artist: String,
  genre: String,
  media:  [{}],
  year: Date
});


// the schema is useless so far
// we need to create a model using it
albumSchema.plugin(autoIncrement.plugin,'Album', {
  startAt: 0
});
var Album = mongoose.model('Album', albumSchema,'albums');

// make this available to our users in our Node applications
module.exports = Album;