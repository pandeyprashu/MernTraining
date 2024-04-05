// function man() {
//     console.log("hello");
//     var message = " manvi"
//     console.log(message);
//     var age = 18;
//     console.log(age);

// }
// man();

// function loop() {
//     for (var i = 0; i < 10; i++) {
//         console.log(i);
//     }
// }
// loop();


// // {let message1="manvi daksh";}
// // console.log(message1);

//  const message="else";
// console.log(message);

// let age=28;
// age="else123";
// console.log(typeof(age));

// let arr=['a','b','c'];
// arr[0]="abcd";
// console.log(arr[0]);
// arr[1]=123;
// console.log(arr[1]);
// let str="daksh";
// let ag=12;
// let ans=ag+str+12;
// console.log(ans);

// ans=ag+(str);
// console.log(ans);

// const str1="Linkedin";
// const str2=`${str1} is platform`


// console.log(str2);
// const a="my";
// const b="name is";
// const c="khan";
// const d="bewafaa";

// const res=`${a} ${b} ${c} ${d}`;
// const res2=a+''+b+''+c+''+d;

// console.log(res);
// console.log(res2);




function print(){
    console.log('--');

}      

// const s="hello";
// print(s);

// print();

function sum(a=10,b=15){
    console.log(a+b);

}

// sum(1,2);
// sum();

const a=function print(){
 console.log("-- named");
}

const b=function(){
    console.log('-- unnamed');


}

const arrow=()=>{
    console.log('-- Arrow');

}
print();
console.log(a);
console.log(b);
console.log(arrow);


