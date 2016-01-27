var yth = require('../index.js');
var assert = require('assert');

describe('yt-hunter tests', function () {
  this.timeout(4000);

  describe('searching "metallica" songs, excluding "nothing"', function () {
    it('should return without errors', function (done) {
      var filters = {
        exclude: ['nothing']
      };

      yth.search('metallica', filters, function (err, songs) {
        if (err) throw err;
        if (songs.length <= 0) throw new Error("no songs found.");

        for (var i = 0; i < songs.length; i++) {
          var song = songs[i];
          if (song.title.toUpperCase().indexOf('NOTHING') >= 0) {
            throw new Error("excluded term found in title");
          }
        };

        done();
      });
    });
  });

  describe('searching "theme"s, excluding superman and batman.', function () {
    it('should return without errors', function (done) {
      var filters = {
        exclude: ['superman', 'batman']
      };

      yth.search('theme', filters, function (err, songs) {
        if (err) throw err;
        if (songs.length <= 0) throw new Error("no songs found.");

        for (var i = 0; i < songs.length; i++) {
          var song = songs[i];
          if (song.title.toUpperCase().indexOf('SUPERMAN') >= 0 ||
              song.title.toUpperCase().indexOf('BATMAN') >= 0) {
            throw new Error("excluded term found in title");
          }
        };

        done();
      });
    });
  });

  describe('searching "pokemon music", including only "theme"', function () {
    it('should return without errors', function (done) {
      var filters = {
        include: ['theme']
      };

      yth.search('pokemon music', filters, function (err, songs) {
        if (err) throw err;
        if (songs.length <= 0) throw new Error("no songs found.");

        for (var i = 0; i < songs.length; i++) {
          var song = songs[i];
          if (song.title.toUpperCase().indexOf('THEME') < 0) {
            throw new Error("included term NOT found in title");
          }
        };

        done();
      });
    });
  });

});
