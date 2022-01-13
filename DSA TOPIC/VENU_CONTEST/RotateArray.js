function rotateArray(n, k, data) {
    k = k % n;
    let res = [];

    for (let i = 0; i < n; i++){
        res[(i + k) % n]=data[i];
    }
    console.log(res.join(" "));
}



function runProgram(input) {
    input = input.trim().split("\n");
    for (let i = 1; i < input.length; i += 2){
        let [n, k] = input[i].trim().split(" ").map(Number);
        let data = input[i + 1].trim().split(" ").map(Number);
        rotateArray(n,k,data)
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
