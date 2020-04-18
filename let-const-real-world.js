(function (){
    var name='wes';
    console.log(name);
})();

//function scope that run immediately u put ur variable inside

// let and const are block scope we dont need a function
{
  const name='wes';  
  console.log(name);
}
// a regular for loop
 for (let i=0;i<10;i++){
 console.log(i);
 // function seTtime goind within a sec
 setTimeout(function(){
//display this after a sec
    console.log('The number is '+i);
 },1000);

 }
