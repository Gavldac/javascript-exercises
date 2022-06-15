const repeatString = function(str, repeat) {
    if ( repeat < 0) return "ERROR";
    let newStr = "";
    while (repeat > 0){
        newStr = newStr + str;
        repeat--;
    } 
    return newStr;
};

// Do not edit below this line
module.exports = repeatString;
