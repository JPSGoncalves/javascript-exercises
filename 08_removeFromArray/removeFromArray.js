const removeFromArray = function(arr, ...args) {
    for (let i = 0; i < args.length; i++) {
        let idx = arr.indexOf(args[i]);

        while (idx !== -1) {
            arr.splice(idx, 1);
            idx = arr.indexOf(args[i]);
        }
    }

    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
