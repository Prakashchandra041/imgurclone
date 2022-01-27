function runProgram(input) {
    input = input.trim().split("\n");
    for (let i = 1; i < input.length; i += 2){
        let n = +input[i];
        let data = input[i + 1].split(" ").map(Number);
        let stack = [];
        let ans = [];
        for (let i = n-1; i >=0; i--){
         while (stack.length !== 0 && stack[stack.length - 1] <= data[i]) {
            stack.pop();
        }
        if (stack.length === 0) {
            ans.push(-1);
        } else {
            ans.push(stack[stack.length-1])
        }
        stack.push(data[i]);   
        }
        console.log(ans.reverse());
        
    }
   
}
if (process.env.USERNAME === "hp") {
  runProgram(`1
4
1 3 2 4`);
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
