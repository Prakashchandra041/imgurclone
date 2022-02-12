function countEqual(data1, data2, n) {
    let i = 0;
    let j = n - 1;
    let count = 0;
    while (i < n && j >= 0) {
        if (data1[i] == data2[j]) {
            count++;
            i++;
            j--;
        } else if (data1[i] > data2[j]) {
            j--;
        } else {
            i++
        }
    }
    console.log(count);
}


function runProgram(input) {
    input = input.trim().split("\n");
    for (let i = 1; i < input.length; i += 3){
        let n = +input[i];
        let data1 = input[i + 1].trim().split(" ").map(Number);
        let data2 = input[i + 2].trim().split(" ").map(Number);
        countEqual(data1, data2, n);
    }
}
if (process.env.USERNAME === "hp") {
  runProgram(`1
6
1 2 2 3 4 5
4 4 3 2 1 1`);
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
