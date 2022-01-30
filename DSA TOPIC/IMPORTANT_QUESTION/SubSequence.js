function findSequence(res, left, right, data) {
    if (left <= right + 1 && res !== "") {
        console.log(res);
    }

    for (let i = left; i <= right; i++){
        findSequence(res + data[i], i + 1, right, data);
    }
}

function runProgram(input) {
    input = input.trim().split("\n");
    let n = +input[0]-1;
    let data = input[1]
    
    findSequence("", 0, n, data);
}
if (process.env.USERNAME === "hp") {
  runProgram(`4
abcd`);
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
