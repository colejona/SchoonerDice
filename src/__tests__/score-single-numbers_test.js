const {scoreSingleNumbers} = require("../score-single-numbers");

describe("scoreSingleNumbers", () => {
    it("can score 4 ones", () => {
        expect(scoreSingleNumbers(1, [1, 5, 1, 1, 1])).toEqual(4);
    });

    it("can score 2 ones", () => {
        expect(scoreSingleNumbers(1, [1, 5, 1, 2, 2])).toEqual(2);
    });

    it("can score 0 ones", () => {
        expect(scoreSingleNumbers(1, [2, 5, 8, 4, 2])).toEqual(0);
    });

    it("can score 5 ones", () => {
        expect(scoreSingleNumbers(1, [1, 1, 1, 1, 1])).toEqual(5);
    });

    it("can score 4 twos", () => {
        expect(scoreSingleNumbers(2, [2, 2, 2, 2, 5])).toEqual(8);
    });

    it("can score 5 eights", () => {
        expect(scoreSingleNumbers(8, [8, 8, 8, 8, 8])).toEqual(40);
    });

    it("can score 0 eights", () => {
        expect(scoreSingleNumbers(8, [2, 2, 2, 2, 5])).toEqual(0);
    });
});
