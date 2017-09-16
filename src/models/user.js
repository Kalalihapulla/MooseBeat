const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const autoIncrement = require('mongoose-auto-increment');
const connection = mongoose.createConnection('mongodb://root:root@ds131914.mlab.com:31914/moosebeat');
autoIncrement.initialize(connection);

// create a schema  unique: true 
var userSchema = new Schema({
  name: String,
  username: { type: String, required: true},
  password: { type: String, required: true },
  admin: Boolean,
  location: String,
  created_at: Date,
  updated_at: Date
});

userSchema.methods.dudify = function() {
    // add some stuff to the users name
    this.name = this.name + '-dude'; 
  
    return this.name;
  };
// the schema is useless so far
// we need to create a model using it
userSchema.plugin(autoIncrement.plugin,'User', {
  startAt: 0
});
var User = mongoose.model('User', userSchema,'users');

// make this available to our users in our Node applications
module.exports = User;