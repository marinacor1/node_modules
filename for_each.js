var pry = require('pryjs')

var _ = require("lodash");

var cities = function(list){
  return _.forEach(list, function(city){
    if (city["population"] > 1) {
      return city["size"] = 'big';
    } else if (city["population"] < 0.5) {
      return city["size"] = 'small';
    } else {
      return city["size"] = 'med';
    };
  });
};

module.exports = cities;
