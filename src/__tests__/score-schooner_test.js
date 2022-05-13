const {scoreSchooner} = require("../score-schooner");

describe("scoreSchooner", () => {
    it("can score a good Schooner", () => {
        expect(scoreSchooner([1, 1, 1, 1, 1])).toEqual(50);
    });
});
