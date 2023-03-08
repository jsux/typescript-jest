import { is25PercentChance } from "../src/probablityCalc";

const mockedModule = jest.spyOn(Math, "random");

test("should return false for math.random <0.25", () => {
  mockedModule.mockReturnValueOnce(0.12345);
  expect(is25PercentChance()).toBe(true);
});

test("should return false for math.random <0.25", () => {
  mockedModule.mockReturnValueOnce(0.892345);
  expect(is25PercentChance()).toBe(false);
});
