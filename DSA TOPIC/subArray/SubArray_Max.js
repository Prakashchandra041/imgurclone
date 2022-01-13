function find_k_SubArray(n, k, data) {
    let left = 0;
    let right = 0;
    let sum = data[right];

    while (left < n && right < n) {
        if (sum == k) {
            console.log("Yes");
        }
        else{}
    }
}
function runProgram(input) {
    input = input.trim().split("\n");
    for (let i = 1; i < input.length; i+=2){
        const [n, k] = input[i].trim().split(" ").map(Number);
        let data = input[i + 1].trim().split(" ").map(Number);
       find_k_SubArray(n,k,data)
    }
    

    
}
if (process.env.USERNAME === "hp") {
  runProgram(`3
5 3
1 2 1 3 4
4 5
1 2 1 3
3 2
1 2 1`);
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
