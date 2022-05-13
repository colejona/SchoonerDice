exports.scoreThreeOfAKind = dice => {
    const {foundThreeOfAKind, sumOfAllDice} = dice.reduce(
        (accumulator, nextNumber) => {
            accumulator.diceNumbers[nextNumber] = accumulator.diceNumbers[nextNumber] === undefined ? 1 : accumulator.diceNumbers[nextNumber] + 1;

            if (accumulator.diceNumbers[nextNumber] === 3) {
                accumulator.foundThreeOfAKind = true;
            }

            accumulator.sumOfAllDice += nextNumber;

            return accumulator;
        }, {
            diceNumbers: {},
            foundThreeOfAKind: false,
            sumOfAllDice: 0
        });

    if (foundThreeOfAKind) {
        return sumOfAllDice;
    } else {
        return 0;
    }
};
