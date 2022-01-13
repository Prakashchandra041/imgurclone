// IMPORTANT DONE BY RECURRSION
// REVERSE TO RIGHT

function reverse(data, i, j) {
    while (i < j) {
        temp = data[i];
        data[i] = data[j];
        data[j] = temp;
        i++;
        j--;
    }
}

function rotateArray(n, k, data) {
  k = k % n;
    reverse(data, 0, n - 1);
    reverse(data, 0, k - 1);
    reverse(data, k, n - 1);
    return console.log(data.join(" "));
}

function runProgram(input) {
  input = input.trim().split("\n");
  for (let i = 1; i < input.length; i += 2) {
    let [n, k] = input[i].trim().split(" ").map(Number);
    let data = input[i + 1].trim().split(" ").map(Number);
    rotateArray(n, k, data);
  }
}
if (process.env.USERNAME === "hp") {
  runProgram(`3
3 1
1 2 3
2 2
1 2
2 3
1 2`);
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
