function RotateArray(n, k, data) {
    k = k % (n+1);
    reverse(0, n, data);
    reverse(0, k - 1, data);
    reverse(k, n, data);
}

function reverse(l, r, data) {
    while (l < r) {
        let temp = data[l];
        data[l] = data[r];
        data[r] = temp;
        l++;
        r--;
    }
}



function runProgram(input) {
    input = input.trim().split("\n");
    for (let i = 1; i < input.length; i += 2){
        const [n, k] = input[i].split(" ").map(Number);
        let data = input[i + 1].split(" ").map(Number);
    
        RotateArray(n-1, k, data);

        console.log(data);
    }
}
if (process.env.USERNAME === "hp") {
  runProgram(`3
9 3
1 2 3 4 5 6 7 8 9
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
