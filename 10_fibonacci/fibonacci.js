const fibonacci = function(num) {
    if (num == 1 || num == 2) {
        return 1;
    } else if (num < 1) {
        return 'OOPS';
    } else {
        let x = 1, y = 1;
        let curr = 0;
        for (let i = 2; i < num; i++) {
            curr = x + y;
            y = x;
            x = curr;
        }   
        return curr;
    }
};

// Do not edit below this line
module.exports = fibonacci;
