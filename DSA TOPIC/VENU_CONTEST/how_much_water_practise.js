function rainWater(data, n) {
  n = n - 1;
  leftMaxArr = [];
  rightMaxArr = [];
  leftMaxArr[0] = data[0];
  rightMaxArr[n] = data[n];
    let result = 0;
    
    for (let i = 1; i <= n; i++){
        leftMaxArr[i] = Math.max(data[i], leftMaxArr[i - 1]);
    }

    for (let i = n - 1; i >= 0; i--){
        rightMaxArr[i]=Math.max(data[i],rightMaxArr[i+1])
    }
    
    for (let i = 0; i <= n; i++){
        result += Math.min(leftMaxArr[i], rightMaxArr[i]) - data[i];
    }
    console.log(result);
}

function runProgram(input) {
  input = input.trim().split("\n");
  for (let i = 1; i < input.length; i += 2) {
    let n = +input[i];
    let data = input[i + 1].trim().split(" ").map(Number);
    rainWater(data, n);
  }
}
if (process.env.USERNAME === "hp") {
  runProgram(`2
5
3 2 0 4 6
7
7 0 3 6 2 3 5`);
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
