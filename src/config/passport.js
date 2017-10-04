const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const connection = mongoose.createConnection('mongodb://root:root@ds131914.mlab.com:31914/moosebeat');
const User = require('./../models/user');


module.exports = function (passport) {


    // used to serialize the user for the session
    passport.serializeUser(function (user, done) {
        console.log("serialize"+ user.username);
        done(null, user.username);
    });

    // used to deserialize the user
    passport.deserializeUser(function (username, done) {
    
        User.findOne({ 'username': username }, function (err, user) {
            console.log("deserialize"+ user.username);
         
   
                done(err, user);
        
        
        });
    });

   

    passport.use('local-login', new LocalStrategy({
      
    
        passReqToCallback: true // allows us to pass back the entire request to the callback
    },
        function (req, username, password, done) { 
        
      
            User.findOne({ 'username': username }, function (err, user) {
                
                console.log(user.validPassword(password));
             
                if (!user.validPassword(password)){
                    console.log("Login failed");
                    return done(null, false, { message: 'Incorrect password.' }); 

                }
            

                // all is well, return successful user
                console.log("Login success");
                console.log("call " + username);
                return done(null, user);
            });

        }));

};



