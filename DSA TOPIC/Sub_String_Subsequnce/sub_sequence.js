//IMPORTANT MUST PRACTICE BEFORE INTERVIEW


function powerSet(newstr, str, low, high) {
  if (low <= high + 1 && !newstr.length == 0) {
    console.log(newstr);
  }
  for (let i = low; i <= high; i++) {
    powerSet(newstr + str[i], str, i + 1, high);
  }
}

function runProgram(input) {
  input = input.trim().split("\n");
  let str = input[1];
  let low = 0;
  let high = str.length - 1;
  let newstr = "";
  powerSet(newstr, str, low, high);
}
if (process.env.USERNAME === "hp") {
  runProgram(`3
abc`);
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
