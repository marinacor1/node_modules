var pry = require('pryjs')

var _= require("lodash");
var chainedWords = function(words) {
  return _.chain(words)
    .map(function(word) {
      return _.upperCase(word).replace(/\s+/g, '') + ("CHAINED")
    })

    .sortBy();
};

module.exports = chainedWords;
