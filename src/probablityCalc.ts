// internal , not to be tested
export function is25PercentChance(): boolean {
  const randomValue = Math.random(); // Generates a random number between 0 and 1
  return randomValue <= 0.25; // Returns true if the random value is less than or equal to 0.25
}
