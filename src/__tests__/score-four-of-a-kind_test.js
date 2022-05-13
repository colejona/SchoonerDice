const {scoreFourOfAKind} = require("../score-four-of-a-kind");

describe("scoreFourOfAKind", () => {
    it("can score a good four of a kind", () => {
        expect(scoreFourOfAKind([1, 1, 1, 1, 7])).toEqual(11);
    });
});
