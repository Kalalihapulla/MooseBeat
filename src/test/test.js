'use strict'
// Mongoose
const mongoose = require('mongoose');
mongoose.connect('mongodb://root:root@ds131914.mlab.com:31914/moosebeat', { useMongoClient: true });

const User = require('./../models/user');
const chai = require('chai');
const expect = chai.expect;
const request = require('request');
const Review = require('./../models/review');
const rp = require('request-promise');

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
    describe('"User add album"', () => {
        it('should add album', (done) => {
            User.findOne({ 'username': 'awa12' }, function (err, user) {

                user.albums.push(
                    { artist: "X Japan", title: "RTL", cover: 'cover', mbid: "ww" }
                );
                user.save(err => {
                    if (err) throw err;
                    console.log('Album saved to user successfully!');
                    expect(user.albums[0].artist).to.equal("X Japan")
                    done();
                });

            });
        })
    })
})


describe('Artist module', () => {
    describe('"Artist info"', () => {
        it('should get bbcinfo for metallica', (done) => {
            request.get({
                url: "http://musicbrainz.org/ws/2/artist/65f4f0c5-ef9e-490c-aee3-909e7ae6b2ab?inc=url-rels&fmt=json", headers: {
                    'User-Agent': 'MooseBeat/1.0.0 ( https://moosebeat.herokuapp.com/ )'
                }
            }, function (error, response, body) {
                const result = JSON.parse(body);
                expect(result.relations[0].type).to.equal('BBC Music page');
                done();

            });
        })
        it('should get type-id for metallica', (done) => {
            request.get({
                url: "http://musicbrainz.org/ws/2/artist/65f4f0c5-ef9e-490c-aee3-909e7ae6b2ab?inc=url-rels&fmt=json", headers: {
                    'User-Agent': 'MooseBeat/1.0.0 ( https://moosebeat.herokuapp.com/ )'
                }
            }, function (error, response, body) {
                const result = JSON.parse(body);
                expect(result.relations[1].direction).to.equal('forward');
                done();

            });
        })

    })
})
describe('Lyrix client', () => {
    describe('"Lyric Data Fade"', () => {
        it('should get enter sandman', (done) => {
            const options = {
                uri: 'https://lyrix.herokuapp.com/api/find/Metallica/Enter%20Sandman',
                json: true // Automatically parses the JSON string in the response
            };

            rp(options)
                .then(function (lyrics) {
                    //console.log(JSON.stringify(lyrics.lyric));
                    expect(lyrics.lyric).to.have.lengthOf.above(1200);
                    done();

                })
                .catch(function (err) {


                });

        })
        it('should get orion', (done) => {
            const options = {
                uri: 'https://lyrix.herokuapp.com/api/find/Metallica/Orion',
                json: true // Automatically parses the JSON string in the response
            };

            rp(options)
                .then(function (lyrics) {
                    //console.log(JSON.stringify(lyrics.lyric));
                    expect(lyrics.lyric).to.equal(" Instrumental");
                    done();

                })
                .catch(function (err) {


                });

        })
        it('should get kashmir', (done) => {
            const options = {
                uri: 'https://lyrix.herokuapp.com/api/find/Led%20Zeppelin/Kashmir',
                json: true // Automatically parses the JSON string in the response
            };

            rp(options)
                .then(function (lyrics) {
                    //console.log(JSON.stringify(lyrics.lyric));
                    expect(lyrics.lyric).to.have.lengthOf.above(1500);
                    done();

                })
                .catch(function (err) {


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

    describe('"Reviews"', () => {
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
