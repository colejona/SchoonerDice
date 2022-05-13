const {scoreThreeOfAKind} = require("../score-three-of-a-kind");

describe("scoreThreeOfAKind", () => {
    it("can score a good three of a kind", () => {
        expect(scoreThreeOfAKind([1, 1, 1, 7, 7])).toEqual(17);
    });

    it("can score a scrambled three of a kind", () => {
        expect(scoreThreeOfAKind([5, 3, 5, 4, 5])).toEqual(22);
    });

    it("can score an unqualified three of a kind", () => {
        expect(scoreThreeOfAKind([1, 3, 5, 4, 5])).toEqual(0);
    });
});
