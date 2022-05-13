exports.scoreFullHouse = dice => {
    const diceNumbers = dice.reduce((numbers, nextNumber) => {
        numbers[nextNumber] = numbers[nextNumber] === undefined ? 1 : numbers[nextNumber] + 1;
        return numbers;
    }, {});

    const numbersFound = Object.keys(diceNumbers).map(numStr => parseInt(numStr));

    if (numbersFound.length !== 2) {
        return 0;
    }

    if ((diceNumbers[numbersFound[0]] === 3 && diceNumbers[numbersFound[1]] === 2) ||
        (diceNumbers[numbersFound[0]] === 2 && diceNumbers[numbersFound[1]] === 3)) {
        return 25;
    }
};
