function checkPalindrom(data) {
    let i = 0;
    let j = data.length-1;
    while (i < j) {
        if (data[i] !== data[j]) {
            return 0
        }
        i++;
        j--;
    }
    return data.length;
}

function runProgram(input) {
    let data = input.trim().split("");
    let max = [];

    for (let i = 0; i < data.length; i++){
        let subStr = [];
        for (let j = i; j < data.length; j++){
            subStr.push(data[j]);
            let val = checkPalindrom(subStr);
            if (val > max) {
                max=val
            }
        }  
    }
    console.log(max);
}
if (process.env.USERNAME === "hp") {
  runProgram(`thisracecarisgood`);
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
