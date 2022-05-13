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
        const result = topCategories([3, 3, 3, 3, 3]);
        expect(result).toHaveLength(1);
        expect(result).toContain(Category.SCHOONER);
    });
});
