const {scoreChance} = require("../score-chance");

describe("scoreChance", () => {
    it("can score a chance with low numbers", () => {
        expect(scoreChance([1, 1, 1, 1, 2])).toEqual(6);
    });

    it("can score a chance with high numbers", () => {
        expect(scoreChance([7, 7, 7, 8, 8])).toEqual(37);
    });
});
