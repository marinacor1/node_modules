var _ = require("lodash");

var users = [
  { id: 22, username: "martin", active: true},
  {id: 23, username: 'max', active: false},
  {id: 24, username: 'linda', active: false}
]

var activeUser = function(){
  _.filter(users, { active === true});
};

module.exports = activeUser;
