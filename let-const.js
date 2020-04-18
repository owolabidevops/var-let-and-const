const key='abcd123';
let points= 50;
let winner=false;
//const variable cannot ne updated 
//let variable can be updated
if(points>40){
     winner=true;
    console.log('it ran')
}
const person={
    name:'wes',
    age:28
}

  const wes=Object.freeze(person)
console.log(wes)