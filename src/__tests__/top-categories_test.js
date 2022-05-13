const {topCategories} = require("../top-categories");
const Category = require("../category");

describe("topCategories", () => {
    it("can return a list of more than one result", () => {
        const result = topCategories([3, 3, 3, 6, 7]);
        expect(result).toHaveLength(2);
        expect(result).toContain(Category.THREE_OF_A_KIND);
        expect(result).toContain(Category.CHANCE);
    });

    it("can return only SCHOONER", () => {
        expect(topCategories([3, 3, 3, 3, 3])).toEqual([Category.SCHOONER]);
    });

    it("can return only CHANCE", () => {
        expect(topCategories([3, 3, 2, 2, 1])).toEqual([Category.CHANCE]);
    });
});
