import { bonusScheme } from "./math";

const mockedIs25PercentChanceTrue = () => true;
const mockedIs25PercentChanceFalse = () => false;

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

it("returns 0 for 75% of chances  for deposite > £10", () => {
  expect(bonusScheme(50.4, mockedIs25PercentChanceTrue)).toBe(25.2);
  expect(bonusScheme(50.4, mockedIs25PercentChanceFalse)).toBe(0);
  expect(bonusScheme(50.45, mockedIs25PercentChanceTrue)).toBe(25.23);
  expect(bonusScheme(12876182347691, mockedIs25PercentChanceFalse)).toBe(0);
});
