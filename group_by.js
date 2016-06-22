var pry = require('pryjs')

var _= require("lodash");

var grouped = function(comments) {

  function results(comments, name) {
    return {
      username: name,
      comment_count: _.size(comments)
    }
  }

  return _.chain(comments)
  .groupBy('username')
  .map(function(comments, name) {
    return results(comments, name);
  })
  .reverse()
};

// var grouped = function(comments){
//   var results =  _.groupBy(comments, 'username');
//   var final = new Object
//   var formatted = _.map(results, function(comment){
//     var name = comment[0]['username']
//     eval(pry.it)
//     final["username"] = name
//     final["comment_count"] = _.size(results[name])
//     return final;
//   })
//   return formatted;
// };

module.exports = grouped;
