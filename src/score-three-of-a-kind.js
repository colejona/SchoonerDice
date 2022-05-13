const {scoreNOfAKind} = require("./score-n-of-a-kind");

exports.scoreThreeOfAKind = dice => {
    return scoreNOfAKind(3, dice);
};
