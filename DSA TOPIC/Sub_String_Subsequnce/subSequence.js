function sub_sequence(res, str, low, high){
    if (low <= high + 1) {
        console.log(res);
    }

    for (let i = low; i <= high; i++){
      sub_sequence(res+str[i],str,i+1,high)   
    }
}

function runProgram(input) {
    input = input.trim().split("\n");
    let str = input[1];
    let high = +input[0]-1;
    let low = 0;
    let res = "";
    sub_sequence(res, str, low, high);
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
