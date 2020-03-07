module.exports = function transform(arr) {
  let resultArr = []
  if (!Array.isArray(arr)) {
    throw Error
  }
  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case '--double-next':
        if (i < arr.length - 1) {
          resultArr.push(arr[i + 1])
        }
        break
      case '--double-prev':
        if (i > 0) {
          resultArr.push(arr[i - 1])
        }
        break
      case '--discard-next':
        if (i < arr.length - 1) {
          i++
        }
        break
      case '--discard-prev':
        if (i > 0) {
          resultArr.pop()
        }
        break
      default:
        resultArr.push(arr[i])
        break
    }
  }
  return resultArr;

};
