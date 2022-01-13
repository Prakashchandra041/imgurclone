function runProgram(input) {
  input = input.trim().split("\n");
  let i = 0;
  let n = +input[i];
  let data = input[i + 1].trim().split(" ").map(Number);
  let sumLeft = [];
  let sumRight = [];
  let sumLeftValue = 0;
  for (let i = 0; i < n; i++){
    sumLeftValue += data[i];
    sumLeft.push(sumLeftValue);
  }
  let sumRightValue = 0;
  for (let i = n - 1; i >= 0; i--) {
    sumRightValue += data[i];
    sumRight.push(sumRightValue);
  }
  
  sumRight = sumRight.reverse();
 

  for (let i = 0; i < n; i++){
    if (sumRight[i] === sumLeft[i]) {
      return console.log(i + 1);
    }
  }
  return console.log("-1");
}
if (process.env.USERNAME === "hp") {
  runProgram(`5
3 3 5 5 1`);
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
