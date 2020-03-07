module.exports = function repeater(str, options) {
  let {repeatTimes, separator, addition, additionRepeatTimes, additionSeparator} = options
    let repeatArr = []
    let resultArr = []
    if (additionRepeatTimes) {
        addition = String(addition)
        for (let i = 0; i < additionRepeatTimes; i++) {
            if (addition) {
                repeatArr.push(addition)
            }
        }
    } else if (addition) {
        addition = String(addition)
        repeatArr.push(addition)
    }

    let repeatStr = repeatArr.join((additionSeparator ? additionSeparator : ''))
    if (repeatTimes) {
        for (let i = 0; i < repeatTimes; i++) {
            resultArr.push(str + repeatStr)
        }
    } else {
        resultArr.push(str + repeatStr)
    }

    return resultArr.join((separator ? separator : '+'))

};
  