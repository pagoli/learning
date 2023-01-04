const button = document.querySelector("button");
const input1 = document.getElementById("num1")! as HTMLInputElement;
//! means we are sure this will never be null;
//!  as HTMLInputElement => Typecasting
const input2 = document.getElementById("num2")! as HTMLInputElement;

document.querySelector("form").addEventListener("click", function(event){
  event.preventDefault()
});

const add = (num1: number, num2: number) => {
  if (typeof num1 === "number" && typeof num2 === "number") {
    return num1 + num2;
  } else {
    return +num1 + +num2; //+num converts it to a number
  }
};

button.addEventListener("click", () =>
  console.log(add(+input1.value, +input2.value))
);
