const {scoreSmallStraight} = require("../score-small-straight");

describe("scoreSmallStraight", () => {
    it("can score a good small straight", () => {
        expect(scoreSmallStraight([2, 3, 4, 5, 7])).toEqual(30);
    });

    it("can score a small straight with a lower extra number", () => {
        expect(scoreSmallStraight([2, 5, 6, 7, 8])).toEqual(30);
    });

    it("can score a scrambled small straight", () => {
        expect(scoreSmallStraight([3, 4, 5, 7, 2])).toEqual(30);
    });

    it("can score an unqualified small straight", () => {
        expect(scoreSmallStraight([3, 4, 5, 7, 8])).toEqual(0);
    });
});
