
function add2(n1: number , n2: number, showResult: boolean, phrase: string) {
  // * if statement not needed in TS due to defining value of the params above.
  // if (typeof n1 !== 'number'|| typeof n2 !== 'number'){
  //   throw new Error('Incorrect Input!')
  // } 
  const result = n1 + n2;
  if(showResult) {
    console.log(phrase + result)
  } else {
    return result;
  }
}

const num1 = 5
const num2 = 2.8
const printResult = true;
const resultPhrase = "Result is: "


// const result = add(num1, num2, printResult);
// console.log(result)
add2(num1, num2, printResult, resultPhrase)

// converts file to an ES Module which solves the error:
// => This happens, when you use i.e. Arrow functions like const add = () => {}
// Cannot redeclare block-scoped variable 'name'.ts(2451)
// export {};