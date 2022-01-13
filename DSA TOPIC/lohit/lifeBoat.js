
// IMPORTANNT

// Prerequisite: Greedy, Sortings and Two Pointers

// Time Complexity:
// O(n*log(n)) per testcase.

// Space Complexity:
// Input Array takes O(n) space and auxillary space is O(1).

function lifeBoat(n, k, weight) {
    let i = 0;
    let j = n - 1;
    let result = 0;
    while (i <= j) {
        result++;
        if (weight[i] + weight[j] <= k) {
            i++;
        }
        j--;
    }
    console.log(result);
}


function runProgram(input) {
    input = input.trim().split("\n");
    for (let i = 1; i < input.length; i += 2){
        let [n, k] = input[i].trim().split(" ").map(Number);
        let weight = input[i + 1].trim().split(" ").map(Number).sort((a,b)=>a-b);
        lifeBoat(n, k, weight);
    }
}
if (process.env.USERNAME === "hp") {
  runProgram(`2
4 5
3 5 3 4
4 3
1 2 2 3`);
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
