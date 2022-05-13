exports.scoreOnes = dice => {
    return dice.reduce((sum, next) => next === 1 ? sum + 1 : sum);
};
