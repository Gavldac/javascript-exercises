const sumAll = function (startNum, finishNum) {
    // typeof should return "number"
    // return "ERROR" for non-number arguments
    // return "ERROR" for arguments less than 0
    // sort arguments by size/value

    // first num for counter start stop when equal to second num 
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
