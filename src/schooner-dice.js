const Category = require("./category");
const { scoreOnes } = require("./score-ones");
const { scoreFullHouse } = require("./score-full-house");

exports.score = (category, dice) => {
    switch(category) {
        case Category.ONES:
            return scoreOnes(dice);
        case Category.FULL_HOUSE:
            return scoreFullHouse(dice);
    }
}
