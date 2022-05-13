const {scoreOnes} = require("../score-ones");

describe("scoreOnes", () => {
    it("can score four ones", () => {
        expect(scoreOnes([1, 5, 1, 1, 1])).toEqual(4);
    });
});
