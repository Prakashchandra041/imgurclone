function swap(data, a, b) {
  data = data.split("");
  //console.log('data',data)
  let temp = data[a];
  data[a] = data[b];
  data[b] = temp;
  return data.join("");
}

function runProgram(input) {
  var newInput = input.split(/[\r\n]+/);
  var length = Number(newInput[0]); 
  var data = newInput[1].split(" ").join("");
  console.log(data);
  generatePermutation(data, 0, length - 1);
  function generatePermutation(x, curr, len) {
    if (curr === len) {
      console.log(x.split("").join(" "));
    } else {
      for (let i = curr; i <= len; i++) {
        x = swap(x, i, curr);
        generatePermutation(x, curr + 1, len);
      }
    }
  }
}

if (process.env.USERNAME === "hp") {
  runProgram(`3
1 2 3`);
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
