var assert = require("assert");
var whitespaceDot = require("../whitespace-dot.js");
describe('#replaceWhitespaces()', function () {
  it('should return str with dots instead of whitespaces', function () {
    console.log(whitespaceDot);
    assert.equal(whitespaceDot.replaceWhitespaces('ss s'), 'ss.s');
  });
});