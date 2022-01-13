//IMPORTANT WATCH BEFORE INTERVIEW

// let n = 5;
// let res;
// for (let i = 0; i < n; i++) {
//   res = "";

//   for (let j = 0; j < n - i; j++) {
//     res += "  ";
//   }

//   for (let k = 0; k < i; k++) {
//     res += "* ";
//     }
    
//     for (let m = 0; m < i; m++){
//         res += "* ";
//     }
//   console.log(res);
// }
    let n = 4;
    var width = 2 * n - 1; // Always the case.
    var midpoint = Math.floor(width / 2); // Middle of pyramid.
    let level = ""; // will be reset each level loop

    for (var i = 0; i < n; i++) {
      // Looping through levels
      level = "";
      for (var j = 0; j < width; j++) {
        if (j < midpoint - i || j > midpoint + i) {
          level += "  ";
        } else {
          level += "* ";
        }
      }
      console.log(level);
    }