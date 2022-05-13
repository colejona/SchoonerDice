function sortDice(dice) {
    return [...dice].sort((a, b) => a - b);
}

exports.scoreLargeStraight = dice => {
    const sortedDice = sortDice(dice);
    const {foundLargeStraight} = sortedDice.reduce((accumulator, nextNumber) => {
        if (accumulator.lastNumber === undefined) {
            return {
                foundLargeStraight: accumulator.foundLargeStraight,
                consecutiveNumbers: 1,
                lastNumber: nextNumber
            };
        } else {
            if (nextNumber === accumulator.lastNumber + 1) {
                const consecutiveNumbers = accumulator.consecutiveNumbers + 1
                return {
                    foundLargeStraight: accumulator.foundLargeStraight || consecutiveNumbers >= 5,
                    consecutiveNumbers: consecutiveNumbers,
                    lastNumber: nextNumber
                };
            } else {
                return {
                    foundLargeStraight: accumulator.foundLargeStraight,
                    consecutiveNumbers: 1,
                    lastNumber: nextNumber
                };
            }
        }
    }, {
        foundLargeStraight: false,
        consecutiveNumbers: 0,
        lastNumber: undefined
    });

    if (foundLargeStraight) {
        return 40;
    } else {
        return 0;
    }
};
