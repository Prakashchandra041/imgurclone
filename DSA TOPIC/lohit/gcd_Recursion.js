// LCM= (NUM1 * NUM2)/GCD;

function findGCD(n1, n2) {
    console.log("n1", n1, "n2", n2);
    if (n2 == 0) {
        return console.log(n1);
    }
       findGCD(n2,n1%n2)
     
}

function runProgram(input) {
  input = input.trim().split("\n");
  for (let i = 1; i < input.length; i++) {
    let [n1, n2] = input[i].trim().split(" ").map(Number);
      findGCD(n1, n2);
  }
}
if (process.env.USERNAME === "hp") {
  runProgram(`1
150 35`);
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
