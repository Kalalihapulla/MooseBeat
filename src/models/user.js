const bcrypt = require('bcrypt-nodejs');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const autoIncrement = require('mongoose-auto-increment');
const connection = mongoose.createConnection('mongodb://root:root@ds131914.mlab.com:31914/moosebeat');
autoIncrement.initialize(connection);

// create a schema  unique: true 
const userSchema = new Schema({

  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  admin: Boolean,
  location: String,
  reviews: [{}], 
  albums: [{}],
  created_at: Date,
  updated_at: Date,
  _id: Number
});



userSchema.methods.generateHash = function (password) {
  this.password = bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);

};

// checking if password is valid
userSchema.methods.validPassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

// we need to create a model using it
userSchema.plugin(autoIncrement.plugin, 'User', {
  startAt: 0
});
const User = mongoose.model('User', userSchema, 'users');

// make this available to our users in our Node applications
module.exports = User;