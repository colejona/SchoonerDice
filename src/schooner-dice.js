const Category = require("./category");
const { scoreFullHouse } = require("./score-full-house");

exports.score = (category, dice) => {
    switch(category) {
        case Category.FULL_HOUSE:
            return scoreFullHouse(dice);
        // case Category.ONES:
        //     return scoreOnes(dice);
    }
}
