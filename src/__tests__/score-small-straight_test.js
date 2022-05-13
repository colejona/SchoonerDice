const {scoreSmallStraight} = require("../score-small-straight");

describe("scoreSmallStraight", () => {
    it("can score a good small straight", () => {
        expect(scoreSmallStraight([2, 3, 4, 5, 7])).toEqual(30);
    });
});
