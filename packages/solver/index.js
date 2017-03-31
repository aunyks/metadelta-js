const simplifyExpression = require('./lib/simplifyExpression');
const solveEquation      = require('./lib/solveEquation');
const ChangeTypes        = require('./lib/ChangeTypes');
// To repeat redundant dependencies, expose mathjs from here
var mathjs               = require('mathjs');

module.exports = {
  simplifyExpression: simplifyExpression,
  solveEquation: solveEquation,
  ChangeTypes: ChangeTypes,
  mathjs: mathjs
};
