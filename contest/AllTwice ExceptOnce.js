function checkUniquEle(n, data) {
    let obj = {};
    for (let i = 0; i < n; i++){
        if (obj[data[i]] == undefined) {
            obj[data[i]] = 1;
        } else {
            obj[data[i]]++
         }
    }

    for (key in obj) {
        if (obj[key] == 1) {
            return console.log(key);
        }
    }

    return console.log(-1);
}


function runProgram(input) {
    input = input.trim().split("\n");
    for (let i = 1; i < input.length; i += 2){
        let n=+input[i];
        let data = input[i + 1].trim().split(" ").map(Number);
        checkUniquEle(n, data);
    }
}
if (process.env.USERNAME === "hp") {
  runProgram(`2
1
5
5
1 2 1 3 2`);
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
