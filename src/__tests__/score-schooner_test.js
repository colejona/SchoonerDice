const {scoreSchooner} = require("../score-schooner");

describe("scoreSchooner", () => {
    it("can score a good Schooner", () => {
        expect(scoreSchooner([1, 1, 1, 1, 1])).toEqual(50);
    });

    it("can score another good Schooner", () => {
        expect(scoreSchooner([5, 5, 5, 5, 5])).toEqual(50);
    });
});
