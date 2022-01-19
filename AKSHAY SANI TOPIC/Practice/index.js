//CLOSURE IMPORTANT

//1
// function outter() {
//   let a = 1;
//   function inner() {
//     console.log(a);
//   }
//   return inner;
// }


// let x = outter();
// x();


//2

function outter() {                   
  let a = 1;
  function inner() {
    console.log(a);
  }
  a = 100;
  return inner;
}

let x = outter();
x();