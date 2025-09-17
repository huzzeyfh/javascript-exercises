const sumAll = function (a, b) {
        if (typeof a !== "number" || typeof b !== "number") {
            return "ERROR";
        }

        if (!Number.isInteger(a) || !Number.isInteger(b)) {
            return "ERROR";
        }

        if (a < 0 || b < 0) {
            return "ERROR";
        }

        let finalSum = 0;
        let start = Math.min(a, b);
        let end = Math.max(a, b);

        for (let i = start; i <= end; i++) {
            finalSum += i;
        }

        return finalSum;
};

// Do not edit below this line
module.exports = sumAll;