const axiosHelper = require("./helpers/axiosHelper");

const const_global = {};


module.exports.generateRandomID = function (userContext, events, done) {
    const_global.randomID = userContext.vars.randomID = Math.random().toString().slice(2, 5);
  return done();
};
