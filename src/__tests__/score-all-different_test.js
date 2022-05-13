const {scoreAllDifferent} = require("../score-all-different");

describe("scoreAllDifferent", () => {
    it("can score a good all different", () => {
        expect(scoreAllDifferent([1, 2, 3, 4, 5])).toEqual(35);
    });

    it("can score a scrambled all different", () => {
        expect(scoreAllDifferent([2, 4, 1, 8, 7])).toEqual(35);
    });

    it("can score an unqualified all different", () => {
        expect(scoreAllDifferent([2, 4, 1, 8, 2])).toEqual(0);
    });
});
