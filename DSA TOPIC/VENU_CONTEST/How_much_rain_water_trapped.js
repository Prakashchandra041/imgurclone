// Brut force O(n**2) and space 


function rainWater(data, n) {
    n = n - 1;
    let res = 0;
    for (let i = 1; i < n; i++){
        let left = data[i];
        for (let j = 0; j < i; j++){
            left = Math.max(left, data[j]);
        }
        let right = data[i];
        for (let k = i + 1; k <= n; k++){
            right = Math.max(right, data[k]);
        }

        res += Math.min(left, right) - data[i];
    }
    console.log(res);
}


function runProgram(input) {
    input = input.trim().split("\n");
    for (let i = 1; i < input.length; i += 2){
        let n = +input[i];
        let data = input[i + 1].trim().split(" ").map(Number);
        rainWater(data, n);
    }
}
if (process.env.USERNAME === "hp") {
  runProgram(`2
5
3 2 0 4 6
7
7 0 3 6 2 3 5`);
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
