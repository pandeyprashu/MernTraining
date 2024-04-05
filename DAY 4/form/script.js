const firstnameChange = (e) => {
  // console.log('first name');
  // console.log(e);
  // console.log(e.target.value);
  // const name=e.target.value;
  // if(name.length>3){
  //     console.log('correct');
  // }
};

// const submitForm=(e)=>{
//     e.preventDefault();
//     console.log(e);
// }

// const form = document.getElementById('myForm');
// for(const input of form.elements){
//     if (input.tagName === 'INPUT') {
//         const value = input.value;
//         console.log(`${input.name}: ${value}`);
//     }
// }

function submitForm(e) {
  e.preventDefault();
  const res = {
    hobbies: [],
  };
  const t = e.target;
  for (let i = 0; i < t.length; i++) {
    const ty = t[i].type;
    const vl = t[i].value;
    const nm = t[i].name;

    if (ty == "checkbox" && t[i].checked) {
      res.hobbies.push(vl);
    }
    if (ty != "submit" && ty != "checkbox") {
      res[nm] = vl;
    }
  }
  console.log(res);
}
