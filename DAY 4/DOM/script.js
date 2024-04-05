// console.log(window);
// // console.log(innerHeight);
// // console.log(window.document);

// console.dir(window);

const a=document.getElementsByTagName('h1');
console.log(a);
const tag = document.getElementById('heading');
console.log(tag);
tag.innerText="hello, Everyone";

const query=document.querySelectorAll('h1');
console.log(query);
const query1=document.querySelectorAll('h1.c1');
console.log(query1);

query1.innerText="Hello, Everyone"; 





// const divselect=document.getElementsByTagName("div");
// divselect[0].innerHTML="<h5>Hello World!</h5>";

const ne=document.createElement("h3");
ne.innerHTML="Hello, Created Element";

//adding child in body
// document.body.appendChild(ne);

console.log(ne);

const firstDiv=document.getElementsByTagName("div");
firstDiv[0].appendChild(ne);
//Overrride situation will occur you can make the copy of it and then append it 
firstDiv[1].appendChild(ne);
// console.log(document.getElementById("heading"));
// console.dir(document.getElementById("heading"));


//deep copy and shallow copy ??