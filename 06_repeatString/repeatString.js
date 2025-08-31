const repeatString = function(s, repeat) {
    let repeated = "";

    if (repeat < 0 ) {
        return "ERROR";
    }

    for (let i = 0; i < repeat; i++) {
        repeated = repeated.concat(s);
    }

    return repeated;
};

// Do not edit below this line
module.exports = repeatString;
