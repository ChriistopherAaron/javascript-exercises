const sumAll = function(min, max) {
// Check for non-integer types, non-numbers, or negative values
if (!Number.isInteger(min) || !Number.isInteger(max)) return `ERROR`;
if (min < 0 || max < 0) return `ERROR`;

// DSwap parameters if larger number comes first (e.g. sumAll(123, 1))
if (min > max) {
    const temp = min;
    min = max;
    max = temp;
}

let sum = 0;
for (let i = min; i <= max; i++) {
    sum +=i;
}

return sum;
};

// Do not edit below this line
module.exports = sumAll;
