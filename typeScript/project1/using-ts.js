var button = document.querySelector("button");
var input1 = document.getElementById("num1");
//! means we are sure this will never be null;
//!  as HTMLInputElement => Typecasting
var input2 = document.getElementById("num2");
document.querySelector("form").addEventListener("click", function (event) {
    event.preventDefault();
});
var add = function (num1, num2) {
    if (typeof num1 === "number" && typeof num2 === "number") {
        return num1 + num2;
    }
    else {
        return +num1 + +num2; //+num converts it to a number
    }
};
button.addEventListener("click", function () {
    return console.log(add(+input1.value, +input2.value));
});
