function findMaxSubArray(n, data) {
    let currSum = 0;
    let maxSum = -99999;
    for (let i = 0; i < n; i++){
        currSum = Math.max(currSum+data[i],data[i]);
        maxSum = Math.max(maxSum, currSum);
    }
    return console.log(maxSum);
}


function runProgram(input) {
    input = input.trim().split("\n");
    for (let i = 1; i < input.length; i += 2){
    let n = +input[i];
    let data = input[i + 1].trim().split(" ").map(Number);
        findMaxSubArray(n,data)
    }
    
}
if (process.env.USERNAME === "hp") {
  runProgram(`3
3
1 2 3
4
-1 -1 0 1
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
