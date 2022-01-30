function runProgram(input) {
    input = input.trim().split("\n");
    for (let i = 1; i < input.length; i += 2){
        let n = +input[i];
        let data = input[i + 1].trim().split("");
        let res = "";
        for (let i = 0; i < n; i += 2){
            // console.log(data[i+1])
            for (let j = 0; j < data[i + 1]; j++){
                res += data[i];
            }
        }
        console.log(res);
    }
}
if (process.env.USERNAME === "hp") {
  runProgram(`2
6
a2b1c2
6
a2z1a2`);
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
