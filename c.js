//Q3 Technologies Ltd 



// function foo(someNum, ...params) {
//   return "" + (someNum) * params.length;
// }
// console.log(foo(100, "hello", "world", "ES6 Rocks!", true, 7));


// const FOO = {
//   num: 1,
//   toString: function () {
//     return FOO.num++;
//   }
// }

// if (FOO == 1 && FOO == 2 && FOO == 3) {
//   console.log("Pass");
// }

// const names = ["BMW", "FIAT", "KIA"];
// names[0] = "JEEP";
// console.log(names);



const getfun = (start, stop, step) => Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + (i * step));
console.log(getfun(1, 6, 2));