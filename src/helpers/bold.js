module.exports = function(options) {
  let bolder = `<strong> ${options.fn(this)} </strong>`;
  return bolder;
};
