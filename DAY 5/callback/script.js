// /*let arr = [2, 10, 32, 40];

// function printArray(arr) {
//     arr.forEach(printElements);
//     arr.forEach(sum);
    
// }

// let s = 0;

// function sum(a) {
//     s += a;
// }

// function printElements(elem) {
//     console.log('This is', elem);
// }

// printArray(arr);
// console.log('Sum:', s);*/

// function add(num1, num2, callback) {
//   const sum = num1 + num2;
//   console.log("Sum: ", sum);
//   return callback(num1, num2, multiply);
// }

// function sub(num1, num2, callback) {
//   console.log("Sub: ", num1 - num2);
//   return callback(num1, num2, divide);
// }

// function multiply(num1, num2, callback) {
//   console.log("Multiply: ", num1 * num2);
//   return callback(num1, num2);
// }

// function divide(num1, num2) {
//   console.log("Divide: ", num1 / num2);
//   return 1;
// }

// console.log(add(4, 5, sub));


function add(num1, num2, callback) {
  const sum = num1 + num2;
  console.log('Sum: ',sum);
  return callback(num1, num2,multiply);
}

function sub(num1, num2,callback) {
  console.log('Sub: ',num1 - num2);
  return callback(num1,num2,divide);
}

function multiply(num1,num2,callback){
  console.log('Multiply: ',num1*num2);
  return callback(num1,num2);
}

function divide(num1,num2){
  console.log('Divide: ',num1/num2);
  return 1;
}

console.log(add(4, 5, sub)); 