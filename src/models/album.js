const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const autoIncrement = require('mongoose-auto-increment');
const connection = mongoose.createConnection('mongodb://root:root@ds131914.mlab.com:31914/moosebeat');
autoIncrement.initialize(connection);

// create a schema  unique: true 
const albumSchema = new Schema({

  title: { type: String, required: true },
  artist:{ type: String, required: true },
  genre: String,
  media: [{}],
  year: String,
  added: Number,
  created_at: Date
});

albumSchema.plugin(autoIncrement.plugin, 'Album', {
  startAt: 0
});

albumSchema.methods.addOne = function () {
  this.added += 1;

};
const Album = mongoose.model('Album', albumSchema, 'albums');

// make this available to our users in our Node applications
module.exports = Album;