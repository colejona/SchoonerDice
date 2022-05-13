const {scoreNOfAKind} = require("../score-n-of-a-kind");

describe("scoreNOfAKind", () => {
    it("can score a good three of a kind", () => {
        expect(scoreNOfAKind(3, [1, 1, 1, 7, 7])).toEqual(17);
    });

    it("can score a scrambled three of a kind", () => {
        expect(scoreNOfAKind(3, [5, 3, 5, 4, 5])).toEqual(22);
    });

    it("can score an unqualified three of a kind", () => {
        expect(scoreNOfAKind(3, [1, 3, 5, 4, 5])).toEqual(0);
    });

    it("can score a good four of a kind", () => {
        expect(scoreNOfAKind(4, [1, 1, 1, 1, 7])).toEqual(11);
    });

    it("can score a scrambled four of a kind", () => {
        expect(scoreNOfAKind(4, [5, 5, 5, 4, 5])).toEqual(24);
    });

    it("can score an unqualified four of a kind", () => {
        expect(scoreNOfAKind(4, [5, 3, 5, 4, 5])).toEqual(0);
    });
});
