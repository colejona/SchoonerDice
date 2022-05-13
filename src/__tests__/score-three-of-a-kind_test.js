const {scoreThreeOfAKind} = require("../score-three-of-a-kind");

describe("scoreThreeOfAKind", () => {
    it("can score a good three of a kind", () => {
        expect(scoreThreeOfAKind([1, 1, 1, 7, 7])).toEqual(17);
    });
});
