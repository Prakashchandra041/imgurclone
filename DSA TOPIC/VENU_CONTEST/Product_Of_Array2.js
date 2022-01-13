// Here Time complexity is O(n) and Space Complexity is O(n);
function Product_Of_Array(n, data) {
    let left = new Array(n)
    let right = new Array(n)
    left[0] = 1;
    right[n - 1] = 1;
    let res = [];
    
    for (let i = 1; i < n; i++){
        left[i] = left[i - 1] * data[i - 1];
    }
    for (let i = n - 2; i >= 0; i--){
        right[i] = right[i+1] * data[i +1];
    }
    
    for (let i = 0; i < n; i++){
        res[i] = left[i] * right[i];
    }
    console.log(res.join(" "));
}

function runProgram(input) {
  input = input.trim().split("\n");
  for (let i = 1; i < input.length; i += 2) {
    let n = +input[i];
    let data = input[i + 1].trim().split(" ").map(Number);
    Product_Of_Array(n, data);
  }
}
if (process.env.USERNAME === "hp") {
  runProgram(`2
5
1 2 3 4 5
3
3 2 7`);
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
