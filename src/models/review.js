const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const autoIncrement = require('mongoose-auto-increment');
const connection = mongoose.createConnection('mongodb://root:root@ds131914.mlab.com:31914/moosebeat');
autoIncrement.initialize(connection);

// create a schema  unique: true 
var reviewSchema = new Schema({
  
  title: String,
  user_name:{ type: String, required: true},
  album_id: String,
  text: String,
  created_at: Date
});




reviewSchema.plugin(autoIncrement.plugin,'Review', {
  startAt: 0
});
var Review = mongoose.model('Review', reviewSchema,'reviews');

// make this available to our users in our Node applications
module.exports = Review;