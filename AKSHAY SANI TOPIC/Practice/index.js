//CLOSURE IMPORTANT

/*WHEN FUNCTION RETURNS IT REMOVED FROM STACK BUT BY THE HELP OF CLOSUER 
WE EVEN ABLE TO ACCESS THE VALUE OF A , THEY STILL REMEMBER THER LEXICAL 
SCOPE*/

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


//3

// function outter() {
//   let a = 1;
//   function inner() {
//     let b = 10;
//     console.log(a);
//   }
//   a = 100;
//   return inner;
// }

// let x = outter();
// x();
