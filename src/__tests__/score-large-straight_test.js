const {scoreLargeStraight} = require("../score-large-straight");

describe("scoreLargeStraight", () => {
    it("can score a good large straight", () => {
        expect(scoreLargeStraight([2, 3, 4, 5, 6])).toEqual(40);
    });
});
