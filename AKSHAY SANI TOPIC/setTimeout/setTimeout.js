// function y() {
//   for (var i = 0; i < 4; i++) {
//     setTimeout(() => {
//       console.log(i);           // resion everytime it will referce to same i which is present globally (global scope) 
//     }, 1000);                   // but if we replace var with let, than it will be block scope and at time it will form 
//   }                             // closer every time with block scope i
// }

// y();

// ----------------------


function y() {
  for (let i = 0; i < 4; i++) {
    setTimeout(() => {
      console.log(i); // resion everytime it will referce to same i which is present globally (global scope)
    }, 1000); // but if we replace var with let, than it will be block scope and at time it will form
  } // closer every time with block scope i
}

y();
