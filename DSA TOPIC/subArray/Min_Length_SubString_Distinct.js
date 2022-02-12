// https://oj.masaischool.com/contest/1584/problem/05

// IMPORTANT

function runProgram(input) {
    let data = input.trim().split("");
    let n = data.length;
    let maxDistint = 0;
    let minLength = 9999;
    for (let i = 0; i < n; i++){
        let res = [];
        for (let j = i; j < n; j++){
            res.push(data[j]);
            let noOfdistinct = [...new Set(res)].length;
            if (maxDistint < noOfdistinct) {
                maxDistint = noOfdistinct;
                minLength = res.length;
            }
            else if (maxDistint == noOfdistinct) {
                minLength = Math.min(minLength, res.length);
            }
            
        }
    }
    console.log(minLength);
}
if (process.env.USERNAME === "hp") {
  runProgram(`zoomsessionmooz`);
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
