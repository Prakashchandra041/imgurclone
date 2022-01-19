function runProgram(input) {
    input = input.trim().split("\n");
    for (let i = 1; i < input.length; i++){
        let data = input[i].trim().split("");
        if (data[0] == "-") {
            data.shift();
            data.sort().reverse().unshift("-");
            console.log(data.join(""));
        }
        else {
            data.sort();
            console.log(data.join(""));
        }
    }
    
}
if (process.env.USERNAME === "hp") {
  runProgram(`2
53334121
-1002911
`);
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
