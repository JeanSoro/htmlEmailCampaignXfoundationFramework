module.exports = function(options) {
  let bolder = `<a href='http://www.google.com/'>${options.fn(this)}</a>`;
  return bolder;
};
