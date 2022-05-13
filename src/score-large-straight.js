const {scoreStraightOfSize} = require("./score-straight-of-size");

exports.scoreLargeStraight = dice => {
    return scoreStraightOfSize(5, dice, 40);
};
