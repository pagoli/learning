"use strict";
let sales = 123456789;
let course = "TS";
let is_published = true;
let level;
let numbers = [1, 2, 3, 4, 5];
let user = [1, "Mosh"];
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
let mySize = Size.Medium;
console.log(mySize);
let mySizeConst = 2;
console.log(mySizeConst);
function calculateTax(income, taxYear = 2022) {
    if (taxYear < 2022)
        return income * 1.2;
    return income * 1.5;
}
console.log(calculateTax(10000, 2022));
//# sourceMappingURL=part1.js.map