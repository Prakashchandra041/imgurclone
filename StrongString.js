function countStrong(res, l, r) {
    let count = 0;
    for (let i = l; i <= r; i++){
        if (res[i] == true) {
            count++
        }
    }
    return count;
}



function runProgram(input) {
    input = input.trim().split("\n");
    let dataLen = +input[0];
    let data = input[1].trim().split(" ");
    let res = [];
    for (let i = 0; i < dataLen; i++){
        let val = data[i];
        
        if (data[i][0] == "a" || data[i][0] == "e" || data[i][0] == "i" || data[i][0] == "o" || data[i][0] == "u"
            && val[val.length - 1] == "a" || val[val.length - 1] == "e" || val[val.length - 1] == "i" || val[val.length - 1] == "o" || val[val.length - 1] == "u") {
            res.push(true);
        } else {
            res.push(false)
            }
    }
    for (let i = 3; i < input.length; i++){
        let [l, r] = input[i].trim().split(" ").map(Number);
        console.log(countStrong(res,l-1,r-1));
    }
    
    
}
if (process.env.USERNAME === "hp") {
  runProgram(`5
aba suna oua tes aba
5
1 5
2 4
1 3
3 5
5 5`);
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
