const {score} = require("./score");
const {topCategories} = require("./top-categories");

exports.score = (category, dice) => {
    return score(category, dice);
}

exports.topCategories = dice => {
    return topCategories(dice);
}
