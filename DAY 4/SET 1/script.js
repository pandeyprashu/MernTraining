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


/*fruits[1]='amrood';
console.log(fruits.pop());
console.log(fruits.push('Mango'));
fruits.push("mango");
console.log(fruits.length);*/


console.log(typeof(fruits));
console.log(Array.isArray(obj));

console.log(checkObject(person));
console.log(checkObject(fruits)  );


function checkObject(obj){
    if(typeof obj == 'object'){
        if(Array.isArray(obj)){
            return false;
        }
        return true;
    }else{
        return false;
    }
}

 
  /*Loops*/
const arr=['name',20,true,2.5];

for(let i=0;i<4;i++){
    console.log(arr[i]);
    // console.log(person[i]);
}

for(let i of arr){
    console.log(i);
}


for(let i in arr){
    console.log(i);
}

for(let i in person){
    console.log(i);
}
