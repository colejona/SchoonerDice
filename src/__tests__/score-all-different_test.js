const {scoreAllDifferent} = require("../score-all-different");

describe("scoreAllDifferent", () => {
    it("can score a good all different", () => {
        expect(scoreAllDifferent([1, 2, 3, 4, 5])).toEqual(35);
    });
});
