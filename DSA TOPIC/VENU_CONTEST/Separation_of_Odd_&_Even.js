function separateArray(n, data, q) {
    let odd = [];
    let even = [];
    let result = [];
    for (let i = 0; i < n; i++){
        if (data[i] % 2 === 0) {
            even.push(data[i]);
        } else {
            odd.push(data[i])
        }
    }
    if (q == 1) {
        result = [...even, ...odd];
    } else {
        result = [...odd, ...even];
    }
    console.log(result.join(" "));
}




function runProgram(input) {
    input = input.trim().split("\n");
    for (let i = 1; i < input.length; i += 3){
        let n = +input[i];
        let data = input[i + 1].trim().split(" ").map(Number).sort((a, b) => a - b);
        let q = +input[i + 2];
        separateArray(n, data, q);
    }
}
if (process.env.USERNAME === "hp") {
  runProgram(`2
6
1 3 5 2 7 4
1
6 
1 3 5 2 7 4
2`);
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
