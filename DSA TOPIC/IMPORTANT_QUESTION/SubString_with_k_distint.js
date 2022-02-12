/*
Given string str of lowercase alphabets of length n and an integer K, the task is to count all
substrings of length K which have exactly K distinct characters.
PARTIALLY ACCEPTED (WRONG SEE CORRECT ANSWER IN OJ)
*/
function runProgram(input) {

    data = [...new Set(data)];
    let count = 0;
    for (let i = 0; i < data.length; i++){
        let subStr = [];
        for (let j = i; j < data.length;j++){
            subStr.push(data[j]);
            let setArr = [...new Set(subStr)];
            if (setArr.length == k) {
                count++
            }
        }
    }
    console.log(count);
}
if (process.env.USERNAME === "hp") {
  runProgram(`4 2
abcc`);
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