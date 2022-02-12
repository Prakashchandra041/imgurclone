function runProgram(input) {
    input = input.trim().split("\n");
    let [n, k] = input[0].trim().split(" ").map(Number);
    let data = input[1].trim().split("");
    let count = 0;
    for (let i = 0; i < n-k; i++){
        let SubStr = data.slice(i,i+k);
        let obj = {};
         for (let j = 0; j < SubStr.length; j++) {
           if (obj[SubStr[j]]) {
             break;
           } else {
             obj[SubStr[j]] = 1;
           }
         }

         if (Object.keys(obj).length == k) {
           count++;
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
