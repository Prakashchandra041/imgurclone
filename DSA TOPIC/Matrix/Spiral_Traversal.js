// WATCH OJ LINK , THERE IS SOMETHING WRONG IN THIS CODE WHIC I WAS NOT ABLE TO FIND 

function spiralTravel(arr, M, N) {
    let top = 0;
    let bottom = N - 1;
    let left = 0;
    let right = M - 1;
    let total = M * N;
    let count = 0;
    let res = "";

    while (total > count) {
      for (let i = top; i <= bottom; i++) {
        if (count < total) {
          res += arr[i][left] + " ";
          count++;
        }
      }
      left++;

      for (let i = left; i <= right; i++) {
        if (count < total) {
          res += arr[bottom][i] + " ";
          count++;
        }
      }

      bottom--;
      for (let i = bottom; i >= top; i--) {
        if (count < total) {
          res += arr[i][right] + " ";
          count++;
        }
      }
      right--;

      for (let i = right; i >= left; i--) {
        if (count < total) {
          res += arr[top][i] + " ";
          count++;
        }
      }

      top++;
    }

    console.log(res);
  
}



function runProgram(input) {
    input = input.trim().split("\n");
    for (let i = 1; i < input.length; i = i + N + 1){
        var [M,N] = input[i].trim().split(" ").map(Number);
        let arr = [];
        for (let j = i + 1; j < i + M; j++){
            arr.push(input[j].trim().split(" ").map(Number));
        }
        
        spiralTravel(arr, M, N);
    }
}
if (process.env.USERNAME === "hp") {
  runProgram(`2
3 4
1 2 3 4
5 6 7 8
9 10 11 12
4 3
1 2 3
4 5 6
7 8 9
10 11 12`);
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
