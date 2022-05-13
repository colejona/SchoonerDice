const {topCategories} = require("../top-categories");
const Category = require("../category");

describe("topCategories", () => {
    it("can return a list of more than one result", () => {
        expect(topCategories([3, 3, 3, 6, 7])).toEqual([Category.THREE_OF_A_KIND, Category.CHANCE]);
    });
});
