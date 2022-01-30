function runProgram(input) {
  let data = input.trim().split("");
  let n = data.length;
  let res = "";
  let i = 0;
  while (i <= n) {
    if (data[i] == data[i + 1]) {
      i += 2;
    } else {
      res += data[i];
      i++
     }
   }
    console.log(res);
}
if (process.env.USERNAME === "hp") {
  runProgram(`aaabcccddd`);
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
