const SchoonerDice = require("../schooner-dice");
const Category = require("../category");

describe("SchoonerDice", () => {
    it("can score a " + Category.ONES, () => {
        expect(SchoonerDice.score(Category.ONES, [1, 1, 1, 1, 5])).toEqual(4);
    });

    it("can score a " + Category.FULL_HOUSE, () => {
        expect(SchoonerDice.score(Category.FULL_HOUSE, [1, 1, 1, 7, 7])).toEqual(25);
    });
});
