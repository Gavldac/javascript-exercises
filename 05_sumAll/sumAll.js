const sumAll = function (startNum, finishNum) {
    if (typeof(startNum) != 'number' || typeof(finishNum) != 'number') {
        return 'ERROR';
    }
    if (startNum > finishNum) {
        startNum = startNum + finishNum;
        finishNum = startNum - finishNum;
        startNum = startNum - finishNum;
    }
    if (startNum < 0 ) return 'ERROR';
    let accumulator = 0;
    for (; startNum <= finishNum; startNum++) {
        accumulator += startNum;
    }
    return accumulator

}



// Do not edit below this line
module.exports = sumAll;
