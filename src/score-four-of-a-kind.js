const {scoreNOfAKind} = require("./score-n-of-a-kind");

exports.scoreFourOfAKind = dice => {
    return scoreNOfAKind(4, dice);
};
