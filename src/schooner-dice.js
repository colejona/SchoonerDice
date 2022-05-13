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
        case Category.FIVES:
            return scoreSingleNumbers(5, dice);
        case Category.SIXES:
            return scoreSingleNumbers(6, dice);
        case Category.SEVENS:
            return scoreSingleNumbers(7, dice);
        case Category.EIGHTS:
            return scoreSingleNumbers(8, dice);
        case Category.FULL_HOUSE:
            return scoreFullHouse(dice);
    }
}
