exports.scoreSingleNumbers = (numberToScore, dice) => {
    return dice.reduce((sum, next) => next === numberToScore ? sum + numberToScore : sum, 0);
};
