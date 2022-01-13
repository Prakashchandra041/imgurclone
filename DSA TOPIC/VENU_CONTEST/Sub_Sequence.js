function sub_sequence(string, low, high, result) {
    if (low <= high+1 && result != "") {
        console.log(result);
    }

    for (let i = low; i <= high; i++){
        sub_sequence(string, i + 1, high, result + string[i])
    }

}

function runProgram(input) {
    input = input.trim().split("\n");
    let low = 0;
    let high = input[0] - 1;
    let result = "";
    let string = input[1];
    sub_sequence(string, low, high, result);
}
if (process.env.USERNAME === "hp") {
  runProgram(`4
aman`);
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
