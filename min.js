var pry = require('pryjs')

var _= require("lodash");

var hotTowns = function(towns){
  // pass in towns with temperatures
  var result = { hot: [], warm: []};
  // this will be outputted at the end

  function tempChecker(temp) {
    return temp > 19;
  }
  // method that returns temps greater than 19

   _.forEach(towns, function(hotTemps, town){
    //  equivalent to enumerable. we iterate through each town
    if (_.every(hotTemps, tempChecker)) {
      // this is an every function
      // if every town returns true for tempChecker
      result.hot.push(town);
      // add the town to the array for hot in result
    } else if (_.some(hotTemps, tempChecker)) {
      // else if SOME towns are true, push town to warm array
      result.warm.push(town);
    }
  });
  return result;
};

module.exports = hotTowns;




// I need to make a function that returns a hash of hot and warm towns
