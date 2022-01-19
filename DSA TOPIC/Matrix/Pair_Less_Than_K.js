function runProgram(input) {
  input = input.trim().split("\n");
  for (let m = 1; m < input.length; m += 3) {
    let n = +input[m];
    let data = input[m + 1].trim().split(" ").map(Number).sort((a, b) => a - b);
    let k = +input[m + 2];
    let sum = -1;
    let i = 0; j = 1;
    for (let i = 0; i < n; i++) {
      for (let j = n - 1; j > 0; j--) {
        if (data[i] + data[j]<k) {
          sum = data[i] + data[j];
          break;
        } else {
          j--;
        }
      }
    }
    console.log(sum);
  }
}
if (process.env.USERNAME === "hp") {
  runProgram(`2
5
1 2 3 4 5
7
3
30 10 20
15`);
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
