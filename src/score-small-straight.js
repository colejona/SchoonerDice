function sortDice(dice) {
    return [...dice].sort((a, b) => a - b);
}

exports.scoreSmallStraight = dice => {
    const sortedDice = sortDice(dice);
    const {foundSmallStraight} = sortedDice.reduce((accumulator, nextNumber) => {
        if (accumulator.lastNumber === undefined) {
            return {
                foundSmallStraight: accumulator.foundSmallStraight,
                consecutiveNumbers: 1,
                lastNumber: nextNumber
            };
        } else {
            if (nextNumber === accumulator.lastNumber + 1) {
                const consecutiveNumbers = accumulator.consecutiveNumbers + 1
                return {
                    foundSmallStraight: accumulator.foundSmallStraight || consecutiveNumbers >= 4,
                    consecutiveNumbers: consecutiveNumbers,
                    lastNumber: nextNumber
                };
            } else {
                return {
                    foundSmallStraight: accumulator.foundSmallStraight,
                    consecutiveNumbers: 1,
                    lastNumber: nextNumber
                };
            }
        }
    }, {
        foundSmallStraight: false,
        consecutiveNumbers: 0,
        lastNumber: undefined
    });

    if (foundSmallStraight) {
        return 30;
    } else {
        return 0;
    }
};
