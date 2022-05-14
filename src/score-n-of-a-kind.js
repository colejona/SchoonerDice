exports.scoreNOfAKind = (n, dice) => {
    const {foundThreeOfAKind, sumOfAllDice} = dice.reduce(
        (accumulator, nextNumber) => {
            let {diceNumbers, foundThreeOfAKind, sumOfAllDice} = accumulator;

            diceNumbers[nextNumber] = diceNumbers[nextNumber] === undefined ? 1 : diceNumbers[nextNumber] + 1;

            if (!foundThreeOfAKind && diceNumbers[nextNumber] === n) {
                foundThreeOfAKind = true;
            }

            sumOfAllDice += nextNumber;

            return {
                diceNumbers: diceNumbers,
                foundThreeOfAKind: foundThreeOfAKind,
                sumOfAllDice: sumOfAllDice
            };
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
}
