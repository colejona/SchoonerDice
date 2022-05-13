const {score} = require("../score");
const Category = require("../category");

describe("score", () => {
    it("can score a " + Category.ONES, () => {
        expect(score(Category.ONES, [1, 1, 1, 1, 5])).toEqual(4);
    });

    it("can score a " + Category.TWOS, () => {
        expect(score(Category.TWOS, [2, 2, 2, 2, 5])).toEqual(8);
    });

    it("can score a " + Category.THREES, () => {
        expect(score(Category.THREES, [3, 2, 2, 3, 5])).toEqual(6);
    });

    it("can score a " + Category.FOURS, () => {
        expect(score(Category.FOURS, [3, 4, 2, 3, 5])).toEqual(4);
    });

    it("can score a " + Category.FIVES, () => {
        expect(score(Category.FIVES, [3, 4, 2, 3, 5])).toEqual(5);
    });

    it("can score a " + Category.SIXES, () => {
        expect(score(Category.SIXES, [3, 6, 6, 3, 6])).toEqual(18);
    });

    it("can score a " + Category.SEVENS, () => {
        expect(score(Category.SEVENS, [3, 6, 7, 3, 6])).toEqual(7);
    });

    it("can score a " + Category.EIGHTS, () => {
        expect(score(Category.EIGHTS, [8, 6, 8, 3, 6])).toEqual(16);
    });

    it("can score a " + Category.THREE_OF_A_KIND, () => {
        expect(score(Category.THREE_OF_A_KIND, [8, 6, 8, 3, 8])).toEqual(33);
    });

    it("can score a " + Category.FOUR_OF_A_KIND, () => {
        expect(score(Category.FOUR_OF_A_KIND, [8, 8, 8, 3, 8])).toEqual(35);
    });

    it("can score a " + Category.FULL_HOUSE, () => {
        expect(score(Category.FULL_HOUSE, [1, 1, 1, 7, 7])).toEqual(25);
    });

    it("can score a " + Category.SMALL_STRAIGHT, () => {
        expect(score(Category.SMALL_STRAIGHT, [1, 2, 3, 4, 7])).toEqual(30);
    });

    it("can score a " + Category.ALL_DIFFERENT, () => {
        expect(score(Category.ALL_DIFFERENT, [1, 2, 3, 4, 7])).toEqual(35);
    });

    it("can score a " + Category.LARGE_STRAIGHT, () => {
        expect(score(Category.LARGE_STRAIGHT, [1, 2, 3, 4, 5])).toEqual(40);
    });

    it("can score a " + Category.SCHOONER, () => {
        expect(score(Category.SCHOONER, [1, 1, 1, 1, 1])).toEqual(50);
    });

    it("can score a " + Category.CHANCE, () => {
        expect(score(Category.CHANCE, [1, 1, 1, 1, 2])).toEqual(6);
    });
});
