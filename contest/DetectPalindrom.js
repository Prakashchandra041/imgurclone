
function runProgram(input) {
  input = input.trim().split("\n");
  for (let i = 1; i < input.lenght; i += 2) {
    let n = +input[i];
    let data = input[i + 1].trim().split(" ").map(Number);
    // detectPalindrom(n, data);
    console.log(data);
  }
}
if (process.env.USERNAME === "hp") {
  runProgram(`2
6
aabbcc
5
aabcd`);
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