function runProgram(input) {
  let data = input.trim().split("");
  let res = "";
  for (let i = 0; i < data.length; i++) {
    count = 1;
    while (data[i] == data[i + 1]) {
      count++;
      i++;
    }
    res += data[i] + count;
  }
  console.log(res);
}
if (process.env.USERNAME === "hp") {
  runProgram(`aaabbbbcc`);
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
