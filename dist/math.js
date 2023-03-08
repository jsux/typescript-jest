"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bonusScheme = void 0;
const bonusScheme = (deposite = 0, is25PercentChance = () => true) => {
    const limits = {
        lower: 5,
        upper: 10,
    };
    // if (typeof deposite !== "number") {
    //   throw new Error();
    // }
    if (deposite < limits.lower) {
        return 0;
    }
    else if (deposite >= limits.lower && deposite <= limits.upper) {
        return 5;
    }
    else {
        // return 50% , 25%of the time
        return is25PercentChance()
            ? Number(Number(deposite / Number(2)).toFixed(2))
            : 0;
    }
};
exports.bonusScheme = bonusScheme;
console.log((0, exports.bonusScheme)(3.84));
//# sourceMappingURL=math.js.map