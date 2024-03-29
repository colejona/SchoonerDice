const SchoonerDice = require("../schooner-dice");
const Category = require("../category");

describe("SchoonerDice", () => {
    it("can score a " + Category.FULL_HOUSE, () => {
        expect(SchoonerDice.score(Category.FULL_HOUSE, [1, 1, 1, 7, 7])).toEqual(25);
    });

    it("can list top categories", () => {
        expect(SchoonerDice.topCategories([3, 3, 3, 6, 7])).toEqual([Category.THREE_OF_A_KIND, Category.CHANCE]);
    });
});
