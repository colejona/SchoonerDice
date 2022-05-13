const {scoreOnes} = require("../score-ones");

describe("scoreOnes", () => {
    it("can score 4 ones", () => {
        expect(scoreOnes([1, 5, 1, 1, 1])).toEqual(4);
    });

    it("can score 2 ones", () => {
        expect(scoreOnes([1, 5, 1, 2, 2])).toEqual(2);
    });

    it("can score 0 ones", () => {
        expect(scoreOnes([2, 5, 8, 4, 2])).toEqual(0);
    });
});
