function runProgram(input) {
    input = input.trim().split("\n");
    for (let i = 1; i < input.length; i++){
        let data = input[i].trim().split("");
        let stack = [];
        
        for (let i = 0; i < data.length; i++){
            if (stack[stack.length - 1] == "(" && data[i] == ")" || stack[stack.length - 1] == "{" && data[i] == "}" || stack[stack.length - 1] == "[" && data[i] == "]") {
                stack.pop();
                
            } else if (data[i] == "(" || data[i] == "{" || data[i] == "[" || data[i] == ")" || data[i] == "}" || data[i] == "]") {
                stack.push(data[i]);
            }
        }

        if (stack.length === 0) {
            console.log("Yes");
        } else {
            console.log("No");
        }
    }
}
if (process.env.USERNAME === "hp") {
  runProgram(`3
{([])}
()
([]
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
