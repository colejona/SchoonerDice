const Category = require("./category");
const {scoreSingleNumbers} = require("./score-single-numbers");
const {scoreNOfAKind} = require("./score-n-of-a-kind");
const {scoreFullHouse} = require("./score-full-house");
const {scoreSmallStraight} = require("./score-small-straight");
const {scoreAllDifferent} = require("./score-all-different");
const {scoreLargeStraight} = require("./score-large-straight");
const {scoreSchooner} = require("./score-schooner");
const {scoreChance} = require("./score-chance");

exports.score = (category, dice) => {
    switch (category) {
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
        case Category.THREE_OF_A_KIND:
            return scoreNOfAKind(3, dice);
        case Category.FOUR_OF_A_KIND:
            return scoreNOfAKind(4, dice);
        case Category.FULL_HOUSE:
            return scoreFullHouse(dice);
        case Category.SMALL_STRAIGHT:
            return scoreSmallStraight(dice);
        case Category.ALL_DIFFERENT:
            return scoreAllDifferent(dice);
        case Category.LARGE_STRAIGHT:
            return scoreLargeStraight(dice);
        case Category.SCHOONER:
            return scoreSchooner(dice);
        case Category.CHANCE:
            return scoreChance(dice);
    }
}
