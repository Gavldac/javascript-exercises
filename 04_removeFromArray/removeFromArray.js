const removeFromArray = function(argsList, ...removeThese) {
    const removeArgs = Array.from(removeThese);
    let argsArray = Array.from(argsList);
    for(const arg of removeArgs){
        for (let i = 0; i < argsArray.length; i++){
            if(arg === argsArray[i]){
                argsArray.splice(i,1);
            }
        }
    }
    return argsArray;

};

// Do not edit below this line
module.exports = removeFromArray;
