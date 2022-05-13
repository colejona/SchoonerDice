const Category = require("./category");
const {score} = require("./score");

exports.topCategories = dice => {
    const {highestScoringCategories} = Object.keys(Category).reduce((accumulator, nextCategory) => {
        const nextScore = score(Category[nextCategory], dice);
        if (nextScore > accumulator.highestScore) {
            return {
                highestScoringCategories: [Category[nextCategory]],
                highestScore: nextScore
            }
        }
        if (nextScore === accumulator.highestScore) {
            return {
                highestScoringCategories: accumulator.highestScoringCategories.concat(Category[nextCategory]),
                highestScore: nextScore
            }
        }
        return accumulator;
    }, {
        highestScoringCategories: [],
        highestScore: 0
    });

    return highestScoringCategories;
};
