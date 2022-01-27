function swap(data, i, j) {
  let temp = data[i];
  data[i] = data[j];
  data[j] = temp;
}

function runProgram(input) {
  input = input.trim().split("\n");
  let n = +input[0];
    let data = input[1].trim().split(" ").map(Number);
    for (let i = 0; i < n; i++){
        min = i;
        for (let j = i; j < n; j++){
            if (data[j] < data[min]) {
                min = j;
            }
        }
        swap(data, i, min);
    }
  console.log(data.join(" "));
}
if (process.env.USERNAME === "hp") {
  runProgram(`5
3 5 0 9 8`);
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
