// let a=new String("Hello");
// let b="Hello";


// if(a==b){
//     console.log("yes");
// }else{
//     console.log("no");
// }


// if(a===b){
//     console.log("yes");
// }else{
//     console.log("no");
// }


/*---Printing Objects----*/
const person = {
    name: 'John',
    age: 30,
  };

//   const obj = {
//     'name': 'John',
//     'age': 30,
//   };


//    JSON OBJECT NOTATION

// no restrictions on inside values(properties) we change the value in object
const obj = {
    "name": "John" ,
    "age": "30"
  };


//   obj = {
//     "name": "John" ,
//     "age": "30"
//   }; // We can't do it as obj is declared const
  console.log(person);
  console.log(obj);
  document.write("Hello");

  document.write(obj); //we need to stringify it 
  document.write(JSON.stringify(obj));

  obj.age=20;

  console.log(obj);

/**Array in JavaScript */
const fruits=['apple','banana','orange'];
console.log(fruits);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);



console.log(fruits.pop());
console.log(fruits.push('Mango'));

fruits.push("mango");

console.log(fruits.length);
