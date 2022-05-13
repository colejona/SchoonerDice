exports.scoreSchooner = dice => {
    const {allNumbersTheSame} = dice.reduce(
        (accumulator, nextNumber) => {
            if (!accumulator.allNumbersTheSame) {
                return accumulator;
            }
            if (accumulator.lastNumber === null) {
                return {
                    lastNumber: nextNumber,
                    allNumbersTheSame: true
                };
            }
            if (nextNumber === accumulator.lastNumber) {
                return {
                    lastNumber: nextNumber,
                    allNumbersTheSame: true
                };
            }
            return {
                lastNumber: nextNumber,
                allNumbersTheSame: false
            };
        }, {
            lastNumber: null,
            allNumbersTheSame: true
        });

    if (allNumbersTheSame) {
        return 50;
    } else {
        return 0;
    }
};
