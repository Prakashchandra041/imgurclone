function runProgram(input) {
    let data = input.trim().split(" ").map(Number);
    let n = data.length;
    for (let i = 0; i < n; i++){
        let res = [];
        for (let j = i; j < n; j++){
            res.push(data[j]);
            
            let sum = res.reduce((acc, curr) => {
                acc += curr;
                return acc;
            }, 0)
            if (sum === 0) {
                console.log(i, j);
            }
        }
    }
}
if (process.env.USERNAME === "hp") {
  runProgram(`6 3 -1 -3 4 -2 2 4 6`);
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

// function runProgram(input) {
//     let data = input.trim().split(" ").map(Number);
//     let n = data.length;
//     let k = 0;
//     let left = 0;
//     let right = 0;
//     let sum = data[right];
//     while (left<n && right<n) {
//         if (sum == k) {
//             console.log(left, right);
//         }
//         if (sum < k) {
//             right++;
//             sum+=data[right]
//         } else {
//             sum -= data[left];
//             left++;
//         }
//     }
// }
// if (process.env.USERNAME === "hp") {
//   runProgram(`6 3 -1 -3 4 -2 2 4 6`);
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
