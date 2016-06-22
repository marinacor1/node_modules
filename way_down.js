var pry = require('pryjs')

var _= require("lodash");
eval(pry.it)
var filtered = function(incomes) {
  function findAverages(incomes) {
    console.log(incomes);
    // iterate through all of the incomes in this hash
    // add all the incomes up
    // find the average income
  } ;
// create a return value that has the average
  // create hash and label it underperformers and overperformers
  // pass in an array of one with multiple hashes of said income

 // groups by underperform and overperform
 // underperform is less than average
 // overperform is avobe the average
  var results = {'average': findAverages(incomes),
                "underperform": underperformers,
                "overperform": overperformers};
  return results:
};

module.exports = filtered;
