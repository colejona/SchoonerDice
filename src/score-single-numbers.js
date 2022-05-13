exports.scoreSingleNumbers = (number, dice) => {
    return dice.reduce((sum, next) => next === number ? sum + number : sum, 0);
};
