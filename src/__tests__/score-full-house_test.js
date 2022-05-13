const {scoreFullHouse} = require("../score-full-house");

describe("scoreFullHouse", () => {
    it("can score a good full house", () => {
        expect(scoreFullHouse([1, 1, 1, 7, 7])).toEqual(25);
    });

    it ("can score a good scrambled full house", () => {
        expect(scoreFullHouse([3, 5, 3, 5, 5])).toEqual(25);
    });

    it ("can score a bad full house", () => {
        expect(scoreFullHouse([3, 4, 3, 5, 5])).toEqual(0);
    });

    // TODO: move to a ONES test file
    // it ("can score 2 " + ONES, () => {
    //     expect(scoreOnes(ONES, [1, 1, 1, 1, 5])).toEqual(4);
    // });
});
