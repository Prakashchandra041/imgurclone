// Here Time complexity is O(n**2) and Space Complexity is O(n);
function Product_Of_Array(n, data) {
    let res = "";
    for (let i = 0; i < n; i++){
        let sum = 1;
        for (let j = 0; j < n; j++){
            if (i !== j) {
                sum*= data[j];
            }
        }
        res += sum + " ";
    }
    console.log(res);
}


function runProgram(input) {
    input = input.trim().split("\n");
    for (let i = 1; i < input.length; i += 2){
        let n = +input[i];
        let data = input[i+1].trim().split(" ").map(Number);
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
