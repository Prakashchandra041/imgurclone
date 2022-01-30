/*
VERY IMPORTANT  o(n**2)
Given an unsorted array of size, N. Find the first element in the array such that all of its left
elements are smaller and all right elements to it are greater than it.
*/
function runProgram(input) {
    input = input.trim().split("\n");
    let n = +input[0];
    let data = input[1].trim().split(" ").map(Number);
    let flag = false;
    for (let i = 0; i < n; i++){
        let left = true;
        let right = true;
        for (let j = 0; j < n; j++){
            if (j < i && data[j] > data[i]) {
                left = false;
            }
            if (j > i && data[j] < data[i]) {
                right = false;   
            }
        }

        if (left && right) {
            console.log(data[i]);
            flag = true;   
            break;
        }
    }
    if (!flag) {
        console.log(-1)
    }
}
if (process.env.USERNAME === "hp") {
  runProgram(`8
4 3 0 2 6 7 8 9`);
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