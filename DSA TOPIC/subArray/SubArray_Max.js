/*
KADANE EQUATION IMPORTANT

*/


function findMaxContinuesArray(n, data) {
  let maxSum = -9999999;
  let currSum = 0;
  for (let i = 0; i < n; i++){
    currSum = currSum + data[i];
    currSum = Math.max(currSum,data[i]);
    maxSum = Math.max(maxSum, currSum);
    
  }
  return console.log(maxSum);
}

function runProgram(input) {
  input = input.trim().split("\n");
  for (let i = 1; i < input.length; i += 2){
    let n = +input[i];
    let data = input[i + 1].trim().split(" ").map(Number);
    
    findMaxContinuesArray(n, data);
  }
}
if (process.env.USERNAME === "hp") {
  runProgram(`3
3
1 2 3
5
2 -4 1 4 -5
3
2 -1 2`);
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
