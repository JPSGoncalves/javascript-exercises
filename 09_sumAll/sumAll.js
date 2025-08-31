const validateArgs = function(a, b) {
    if ((a < 0) || (b < 0)) {
        return 1;
    }

    if ((!Number.isInteger(a)) || !Number.isInteger(b)) {
        return 1;
    }

    if (typeof (a) !== "number" || typeof (b) !== "number") {
        return 1;
    }

    return 0;
}

const sumAll = function(a, b) {
    const min = Math.min(a, b);
    const max = Math.max(a, b);
    let sum = 0;

    if (validateArgs(a, b)) {
        return "ERROR";
    }

    for (let i = min; i <= max; i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
