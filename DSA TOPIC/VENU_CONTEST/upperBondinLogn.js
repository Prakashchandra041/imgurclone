function runProgram(input) {
    input = input.trim().split("\n");
    let [n, k] = input[0].trim().split(" ").map(Number);
    let data = input[1].trim().split(" ").map(Number);
    let left2 = 0;
    let right2 = n - 1;
    let upperBond;
    while (left2 <= right2) {
      let mid2 = left2 + Math.floor((right2 - left2) / 2);
      if (data[mid2] <= k) {
        upperBond = mid2;
        left2 = mid2 + 1;
      } else if (data[mid2] > k) {
        right2 = mid2 - 1;
      } else {
        left2 = mid2 + 1;
      }
    }

    console.log(data[upperBond]);
}
if (process.env.USERNAME === "hp") {
  runProgram(`10 3
0 2 4 4 5 5 7 7 9 10`);
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
