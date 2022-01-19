function runProgram(input) {
    let [n, k] = input.trim().split(" ").map(Number);

    for (let i = 1; i < n; i++){
        for (let j = 2; j <= n; j++){
            console.log(i, j);
        }
    }
}
if (process.env.USERNAME === "hp") {
  runProgram(`4 2`);
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
