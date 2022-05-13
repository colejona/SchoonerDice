exports.scoreAllDifferent = dice => {
    const {allDifferent} = dice.reduce((accumulator, nextNumber) => {
        if (!accumulator.allDifferent) {
            return accumulator;
        }
        if (accumulator.diceNumbers[nextNumber]) {
            return {
                allDifferent: false,
                diceNumbers: {}
            }
        }
        accumulator.diceNumbers[nextNumber] = true;
        return accumulator;

    }, {
        allDifferent: true,
        diceNumbers: {}
    });

    if (allDifferent) {
        return 35;
    } else {
        return 0;
    }
};
