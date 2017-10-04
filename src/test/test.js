'use strict'
// Mongoose
const mongoose = require('mongoose');
mongoose.connect('mongodb://root:root@ds131914.mlab.com:31914/moosebeat', { useMongoClient: true });

const User = require('./../models/user');
const chai = require('chai');
const expect = chai.expect;
const request = require('request');
const Review = require('./../models/review');

describe('User module', () => {
    describe('"User get"', () => {
        it('should get users', (done) => {
            User.find(function (err, users) {

                console.log(users[0].username);
                expect(users[0].username).to.equal("msonka");
                done();
            });
        })
    })
})

describe('Api tests', () => {
    /*   describe('"Get"', () => {
          it('should get album', (done) => {
              request.get({ url: "http://api.onemusicapi.com/20151208/release?title=Reload&artist=Metallica&user_key=468c1cfb7b96f816544e86fa0698b0cd&inc=images&maxResultCount=1" }, function (error, response, body) {
                  if (!error && response.statusCode == 200) {
                     
                      console.log(JSON.stringify(body));
                      console.log(body.artist);
                      expect(body.artist).to.equal('Metallica');
                      d
                  }
              });
          })
      }) */

    describe('"Get"', () => {
        it('should get reviews for metallica', (done) => {
            Review.find({ artist_mbid: '65f4f0c5-ef9e-490c-aee3-909e7ae6b2ab' }, function (err, result) {
                console.log("Reviews retrieved");
                expect(result[0].username).to.equal('mango');
                done();
            });
        })
        it('should get reviews for guns', (done) => {
            Review.find({ artist_mbid: 'ca891d65-d9b0-4258-89f7-e6ba29d83767' }, function (err, result) {
                console.log("Reviews retrieved");
                expect(result[0].username).to.equal('himelr');
                done();
            });
        })
    })
})