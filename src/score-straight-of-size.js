function sortDice(dice) {
    return [...dice].sort((a, b) => a - b);
}

exports.scoreStraightOfSize = (size, dice, straightScore) => {
    const sortedDice = sortDice(dice);
    const {foundStraight} = sortedDice.reduce((accumulator, nextNumber) => {
        if (accumulator.lastNumber === undefined) {
            return {
                foundStraight: accumulator.foundStraight,
                consecutiveNumbers: 1,
                lastNumber: nextNumber
            };
        } else {
            if (nextNumber === accumulator.lastNumber + 1) {
                const consecutiveNumbers = accumulator.consecutiveNumbers + 1
                return {
                    foundStraight: accumulator.foundStraight || consecutiveNumbers >= size,
                    consecutiveNumbers: consecutiveNumbers,
                    lastNumber: nextNumber
                };
            } else {
                return {
                    foundStraight: accumulator.foundStraight,
                    consecutiveNumbers: 1,
                    lastNumber: nextNumber
                };
            }
        }
    }, {
        foundStraight: false,
        consecutiveNumbers: 0,
        lastNumber: undefined
    });

    if (foundStraight) {
        return straightScore;
    } else {
        return 0;
    }
}