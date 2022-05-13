const Category = require("./category");
const { scoreSingleNumbers } = require("./score-single-numbers");
const { scoreFullHouse } = require("./score-full-house");

exports.score = (category, dice) => {
    switch(category) {
        case Category.ONES:
            return scoreSingleNumbers(1, dice);
        case Category.TWOS:
            return scoreSingleNumbers(2, dice);
        case Category.THREES:
            return scoreSingleNumbers(3, dice);
        case Category.FOURS:
            return scoreSingleNumbers(4, dice);
        case Category.FULL_HOUSE:
            return scoreFullHouse(dice);
    }
}
