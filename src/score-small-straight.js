const {scoreStraightOfSize} = require("./score-straight-of-size");

exports.scoreSmallStraight = dice => {
    return scoreStraightOfSize(4, dice, 30);
};
