module.exports = {
  replaceWhitespaces: replaceWhitespaces
};

function replaceWhitespaces(str) {
  return str.replace(/\s/ig, '.');
}