// Find the Majority element in array
//   any element present greater than half of the size of the array size.

//BRUT FORCE   O(N2)
function runProgram(input) {
    let count = 0;
    let maxcount = -99999;
    input = input.trim().split(" ").map(Number);
    for (let i = 0; i < input.length; i++){
        for (let j = 0; j < input.length; j++){
            if (input[i] === input[j]) {
                count++;
            }
        }
        
    }
    console.log(input);

}
if (process.env.USERNAME === "hp") {
  runProgram(`3 3 4 2 4 4 2 4 4`);
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
