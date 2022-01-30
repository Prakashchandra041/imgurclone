/*
VERY IMPORTANT  o(n)
Given an unsorted array of size, N. Find the first element in the array such that all of its left
elements are smaller and all right elements to it are greater than it.
*/
function runProgram(input) {
  input = input.trim().split("\n");
  let n = +input[0] - 1;
  let data = input[1].trim().split(" ").map(Number);
  let leftMax = [];
  leftMax[0] = data[0];
  let rightMin = [];
  rightMin[n] = data[n];
  for (let i = 1; i < n; i++) {
    leftMax.push(Math.max(data[i], leftMax[i - 1]));
  }

  for (let i = n - 1; i >= 0; i--) {
    rightMin[i]=Math.min(data[i], rightMin[i + 1]);
  }
  
    for (let i = 1; i < n; i++){
        if (data[i] <= rightMin[i+1] && data[i] >= leftMax[i-1]) {
          return    console.log(data[i]);
        
        }
    }
     
    console.log(-1);
}
if (process.env.USERNAME === "hp") {
  runProgram(`8
4 3 0 2 6 7 8 9`);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}
