var yth = require('../index.js');
var assert = require('assert');

describe('yt-hunter tests', function () {
  describe('searching', function () {
    it('should return without error', function (done) {
      var filters = {
        include: ['theme']
      };

      yth.search('superman theme', filters, function (err, songs) {
        if (err) throw err;
        done();
      });
    });
  });
});
