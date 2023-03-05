import { addMe, multiply } from "./math";
describe("addMe", () => {
  it("addMe :: should add 2 positive numbers", () => {
    const a: number = 6;
    const b: number = 5;
    const result = 11;

    expect(addMe(a, b)).toBe(result);
  });
});

describe("multiply", () => {});
