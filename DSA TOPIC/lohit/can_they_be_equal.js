function equaleOrNot(n, st1, st2) {
    
    for (let i = 0; i < n; i++){
        if (st1[i] !== st2[i]) {
            return console.log("No");
        }
    }

    return console.log("Yes");
}



function runProgram(input) {
    input = input.trim().split("\n");
    for (let i = 1; i < input.length; i += 3){
        let n = +input[i];
        let st1 = input[i + 1].trim().split("").sort();
        let st2 = input[i + 2].trim().split("").sort();
        equaleOrNot(n,st1,st2)
    }
}
if (process.env.USERNAME === "hp") {
  runProgram(`2
2
ab
ac
3
aba
aab`);
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
