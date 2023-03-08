/* eslint-disable @typescript-eslint/no-unsafe-call */
import { bonusScheme } from "../src/math";

// import * as utilMod from "../src/probablityCalc";

jest.mock("../src/probablityCalc", () => ({
  is25PercentChance: jest.fn(() => true),
}));
const cases = [
  [0, 0],
  [-1, 0],
  [-10000, 0],
  [4, 0],
  [5, 5],
  [3.84, 0],
  [5.76, 5],
  [6, 5],
  [6.25, 5],
  [7, 5],
  [10, 5],
  [9.456, 5],
];

test.each(cases)(
  "given %p as arguments, returns %p",
  (firstArg, expectedResult) => {
    const result = bonusScheme(firstArg);
    expect(result).toEqual(expectedResult);
  }
);

test("returns 50% of deposite when deposite > £10, ", () => {
  expect(bonusScheme(50.4)).toBe(25.2);
  expect(bonusScheme(50.45)).toBe(25.23);
  expect(bonusScheme(50000.45)).toBe(25000.22);
});
