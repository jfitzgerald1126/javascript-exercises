const sumAll = function(x, y) {
    let sum = 0;
    if (x < 0 || y < 0 || typeof x != "number" || typeof y != 'number') {
        return 'ERROR';
    }
    let start, end;
    if (x <= y) {
        start = x;
        end = y;
    } else {
        start = y;
        end = x;
    }
    for (let i = start; i <= end; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
