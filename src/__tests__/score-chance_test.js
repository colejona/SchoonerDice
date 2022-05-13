const {scoreChance} = require("../score-chance");

describe("scoreChance", () => {
    it("can score a chance with low numbers", () => {
        expect(scoreChance([1, 1, 1, 1, 2])).toEqual(6);
    });
});
