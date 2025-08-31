const leapYears = function(year) {

    const divByFour = year % 4 === 0;
    const divByHundred = year % 100 === 0;
    const divByFourHundred = year % 400 === 0;

    if (divByFour) {
        if (!divByHundred) {
            return true;
        } else {
            if (divByFourHundred) {
                return true;
            }
        }
    }

    return false;
};

// Do not edit below this line
module.exports = leapYears;
