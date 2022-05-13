const {scoreFourOfAKind} = require("../score-four-of-a-kind");

describe("scoreFourOfAKind", () => {
    it("can score a good four of a kind", () => {
        expect(scoreFourOfAKind([1, 1, 1, 1, 7])).toEqual(11);
    });

    it("can score a scrambled four of a kind", () => {
        expect(scoreFourOfAKind([5, 5, 5, 4, 5])).toEqual(24);
    });

    it("can score an unqualified four of a kind", () => {
        expect(scoreFourOfAKind([5, 3, 5, 4, 5])).toEqual(0);
    });
});
