exports.scoreChance = dice => {
    return dice.reduce((sum, nextNumber) => sum + nextNumber, 0);
};
