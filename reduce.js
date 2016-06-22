var pry = require('pryjs')

var _ =require("lodash");

var reduced = function(articles) {
  return _.chain(articles)
    .groupBy('article')
    .map(function(articles, title) {
      var total = _.reduce(articles, function(sum, article){
        return sum + article.quantity;
    }, 0);

  return { article: parseInt(title), total_orders: total}
})
.reverse()

};

module.exports = reduced;
