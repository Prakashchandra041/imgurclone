function runProgram(input) {
    input = input.trim().split("\n");
    let n = +input[0];
    let data = input[1].trim().split(" ").map(Number);
    let left = [];
    let righ = [];
    let sum = 0;
    let sum2 = 0;
    for (let i = 0; i < n; i++){
        sum += data[i];
        left.push(sum);
    }
    for (let i = n - 1; i >= 0; i--){
        sum2 += data[i];
        righ[i] = sum2;
    }
    for (let i = 0; i < n; i++){
        if (left[i] == righ[i]) {
            return console.log(i + 1);
        }
    }
    return console.log(-1);
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
