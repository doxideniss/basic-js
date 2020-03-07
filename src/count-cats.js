module.exports = function countCats( matrix ) {

  return matrix.map(x => {
    return x.filter(x => x === '^^').length
  }).reduce((t,c) => t+c, 0)
  // remove line with error and write your code here
};
