const removeFromArray = function(arr, ...args) {
    let index;
    for (arg of args) {
        index = arr.indexOf(arg);
        if (index > -1) arr.splice(index, 1);
    }
    
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
