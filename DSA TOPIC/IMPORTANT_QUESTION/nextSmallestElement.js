function runProgram(input) {
  input = input.trim().split("\n");
 
    let n = +input[0];
    let data = input[1].split(" ").map(Number);
    let stack = [];
    let ans = [];
    for (let i =0; i < n; i++) {
      while (stack.length !== 0 && stack[stack.length - 1] >= data[i]) {
        stack.pop();
      }
      if (stack.length === 0) {
        ans.push(-1);
      } else {
        ans.push(stack[stack.length - 1]);
      }
      stack.push(data[i]);
    }
    console.log(ans.join(" "));

}
if (process.env.USERNAME === "hp") {
  runProgram(`8
39 27 11 4 24 32 32 1`);
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
