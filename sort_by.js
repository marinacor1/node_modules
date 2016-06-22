var _= require("lodash");

var sorted = function(article){
  return _.sortBy(article, function(thing){
    return -thing.quantity;
  });
};


module.exports = sorted;
