import { is25PercentChance } from "./probablityCalc";
export const bonusScheme = (deposite = 0): number => {
  const limits = {
    lower: 5,
    upper: 10,
  };

  // if (typeof deposite !== "number") {
  //   throw new Error();
  // }

  if (deposite < limits.lower) {
    return 0;
  } else if (deposite >= limits.lower && deposite <= limits.upper) {
    return 5;
  } else {
    // return 50% , 25%of the time
    return is25PercentChance()
      ? Number(Number(deposite / Number(2)).toFixed(2))
      : 0;
  }
};
