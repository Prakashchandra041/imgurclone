function runProgram(input) {
    input = input.trim().split("\n")
    for (let i = 1; i < input.length; i++){
        let [n1, n2] = input[i].trim().split(" ").map(Number);
        let res = 0;
        for (let i = 1; i <= Math.min(n1, n2); i++){
            if (n1 % i === 0 && n2 % i === 0) {
                res = i;
            } 
        }

        console.log(res)

    }
}
if (process.env.USERNAME === "hp") {
  runProgram(`2
6 9
35 150`);
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
