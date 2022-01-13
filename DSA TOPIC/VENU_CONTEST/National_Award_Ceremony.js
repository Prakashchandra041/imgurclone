function award_ceremony(n, data) {
    let res = [];
    for (let i = 0; i < data.length; i++){
        if (data[i] === 0) {
            res.push(data[i])
        } 
    }
    for (let i = 0; i < data.length; i++) {
      if (data[i] === 1) {
        res.push(data[i]);
      }
    }
    for (let i = 0; i < data.length; i++) {
      if (data[i] === 2) {
        res.push(data[i]);
      }
    }

    console.log(res.join(" "));
}


function runProgram(input) {
    input = input.trim().split("\n");
    for (let i = 1; i < input.length; i += 2){
        let n = +input[i];
        let data = input[i + 1].trim().split(" ").map(Number);
        award_ceremony(n,data)
    }
}
if (process.env.USERNAME === "hp") {
  runProgram(`3
1
2
3
2 0 1
4
2 0 2 1`);
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
