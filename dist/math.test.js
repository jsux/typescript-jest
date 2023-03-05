"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const math_1 = require("./math");
describe("addMe", () => {
    it("addMe :: should add 2 positive numbers", () => {
        const a = 6;
        const b = 5;
        const result = 11;
        expect((0, math_1.addMe)(a, b)).toBe(result);
    });
});
describe("multiply", () => { });
//# sourceMappingURL=math.test.js.map