const div=document.querySelector("div");
console.log(div);
//div.remove(); //it will remove the cotent written in the div

/*const c=document.querySelector('p');
div.removeChild(c);*/

const c=document.getElementsByTagName('p');
div.removeChild(c[0]);

// function getInfo(e){
//     // const element=document.querySelector('p');
//     // const e2=document.createElement('p');
//     // e2.innerHTML="My name is Javascript";
//     // element.prepend(e2);
//     // console.log(e);
// }


const button=document.getElementById("btn");
let flag=0;
button.onclick=()=>{

    if(flag==0){
        button.style.backgroundColor="red";
        button.style.color="white"
        flag=1;
    }else{
        button.style.backgroundColor="white";
        button.style.color="black";
        flag=0;
    }
    
};


