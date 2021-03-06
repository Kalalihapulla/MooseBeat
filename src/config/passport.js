const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const connection = mongoose.createConnection('mongodb://root:root@ds131914.mlab.com:31914/moosebeat');

// load up the user model
const User = require('./../models/user');

// expose this function to our app using module.exports
module.exports = function (passport) {

    // =========================================================================
    // passport session setup ==================================================
    // =========================================================================
    // required for persistent login sessions
    // passport needs ability to serialize and unserialize users out of session

    // used to serialize the user for the session
    passport.serializeUser(function (user, done) {
        console.log("serialize"+ user.username);
        done(null, user.username);
    });

    // used to deserialize the user
    passport.deserializeUser(function (username, done) {
    
        User.findOne({ 'username': username }, function (err, user) {
            console.log("deserialize"+ user.username);
         
            // if there are any errors, return the error before anything else
       /*      if (err)
                return done(err);

            // if no user is found, return the message
            if (!user)
                return done(null, false, req.flash('loginMessage', 'No user found.')); // req.flash is the way to set flashdata using connect-flash

            // if the user is found but the password is wrong
            if (!user.validPassword(password))
                return done(null, false, req.flash('loginMessage', 'Oops! Wrong password.')); // create the loginMessage and save it to session as flashdata */
                done(err, user);
            // all is well, return successful user
        
        });
    });

    // =========================================================================
    // LOCAL SIGNUP ============================================================
    // =========================================================================
    // we are using named strategies since we have one for login and one  for signup
    // by default, if there was no name, it would just be called 'local'

    passport.use('local-login', new LocalStrategy({
        // by default, local strategy uses username and password, we will override with email
    
        passReqToCallback: true // allows us to pass back the entire request to the callback
    },
        function (req, username, password, done) { // callback with email and password from our form
        
            // find a user whose email is the same as the forms email
            // we are checking to see if the user trying to login already exists
            User.findOne({ 'username': username }, function (err, user) {
                
                console.log(user.validPassword(password));
                // if there are any errors, return the error before anything else
               
               

                // if no user is found, return the message
         

                // if the user is found but the password is wrong
                if (!user.validPassword(password)){
                    console.log("Login failed");
                    return done(null, false, { message: 'Incorrect password.' }); // create the loginMessage and save it to session as flashdata */

                }
            

                // all is well, return successful user
                console.log("Login success");
                console.log("call " + username);
                return done(null, user);
            });

        }));

};



