//IMPORTANT 


function subArraySum(data, n, k) {
  let left = 0;
  let right = 0;
  let curSum = data[right];
  // console.log(data, n, k, );
  while (right < n && left < n) {
    // console.log("right", right, "left", left, "curSum", curSum);
    if (curSum === k) {
      return "Yes";
    } else if (curSum < k) {
      left++;
      curSum += data[left];
    } else if (curSum > k && left < n) {
      curSum = curSum - data[right];
      right++;
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

// function sum_subarry(data, n, k) {
//     let sum = 0;
//     let i = 0;
//     let j = 0;
//     while (i<n && j<n) {
//         if (sum == k) {
//             return console.log("Yes");
//         }
//         if (sum < k) {
//             sum += data[j];
//             j++;
//         }
//         else if (sum > k) {
//             sum -= data[i];
//             i++
//         }
//     }
//     return console.log("No");
// }

// function runProgram(input) {
//     input = input.trim().split("\n");
//     for (let i = 1; i < input.length; i += 2){
//         let [n, k] = input[i].trim().split(" ").map(Number);
//         let data = input[i + 1].trim().split(" ").map(Number);
//         sum_subarry(data, n, k);
//     }
// }
// if (process.env.USERNAME === "hp") {
//   runProgram(`3
// 5 3
// 1 2 1 3 4
// 4 5
// 1 2 1 3
// 3 2
// 1 2 1`);
// } else {
//   process.stdin.resume();
//   process.stdin.setEncoding("ascii");
//   let read = "";
//   process.stdin.on("data", function (input) {
//     read += input;
//   });
//   process.stdin.on("end", function () {
//     read = read.replace(/\n$/, "");
//     read = read.replace(/\n$/, "");
//     runProgram(read);
//   });
//   process.on("SIGINT", function () {
//     read = read.replace(/\n$/, "");
//     runProgram(read);
//     process.exit(0);
//   });
// }
