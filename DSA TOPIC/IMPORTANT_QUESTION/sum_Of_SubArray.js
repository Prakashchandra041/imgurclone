/*
You are given an array of N integers and a single integer K. You need to find out if there is a subarray,
which has the sum exactly as K.
Kanade algo
*/


function subArraySum(data, n, k) {
    let left = 0;
    let right = 0;
    let sum = data[right];
    while (left < n && right < n) {
        if (sum == k) {
            return "Yes";
        }
        else if (sum < k) {
            right++;
            sum += data[right];
        } else {
            sum -= data[left];
             left++;
        }
    }
    return "No";
}

function runProgram(input) {
  input = input.trim().split("\n");
  for (let i = 1; i < input.length; i = i + 2) {
    const [n, k] = input[i].trim().split(" ").map(Number);
    const data = input[i + 1].trim().split(" ").map(Number);
    console.log(subArraySum(data, n, k));
    // console.log("data", data, "n", n, "k", k);
  }
}
if (process.env.USERNAME === "hp") {
  runProgram(`3
6 33
1 4 20 3 10 5`);
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