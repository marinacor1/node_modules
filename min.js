var pry = require('pryjs')

var _= require("lodash");

var hotTowns = function(towns){
  var result = { hot: [], warm: []};

  function tempChecker(temp) {
    return temp > 19;
  }

   _.forEach(towns, function(hotTemps, town){
    if (_.every(hotTemps, tempChecker)) {
      result.hot.push(town);
    } else if (_.some(hotTemps, tempChecker)) {
      result.warm.push(town);
    }
  });
  return result;
};

module.exports = hotTowns;
