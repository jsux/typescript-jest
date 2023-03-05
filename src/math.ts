interface NumsToNum {
  (a: number, b: number): number;
}
export const addMe: NumsToNum = (a, b) => a + b;
export const multiply: NumsToNum = (a, b) => a * b;
