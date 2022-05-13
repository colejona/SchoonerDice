exports.scoreFourOfAKind = dice => {
    const {foundFourOfAKind, sumOfAllDice} = dice.reduce(
        (accumulator, nextNumber) => {
            accumulator.diceNumbers[nextNumber] = accumulator.diceNumbers[nextNumber] === undefined ? 1 : accumulator.diceNumbers[nextNumber] + 1;

            if (accumulator.diceNumbers[nextNumber] === 4) {
                accumulator.foundFourOfAKind = true;
            }

            accumulator.sumOfAllDice += nextNumber;

            return accumulator;
        }, {
            diceNumbers: {},
            foundFourOfAKind: false,
            sumOfAllDice: 0
        });

    if (foundFourOfAKind) {
        return sumOfAllDice;
    } else {
        return 0;
    }
};
