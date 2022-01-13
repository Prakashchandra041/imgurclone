function runProgram(input) {
    input = input.trim().split("\n");
    let n = +input[0];
    let data = input[1].trim().split(" ").map(Number);
    let k = +input[2];

    let left1 = 0;
    let right1 = n - 1;
    let lowerBond
    while (left1 <= right1) {
        let mid1 = left1 + Math.floor((right1 - left1) / 2);
        if (data[mid1] === k) {
            lowerBond = mid1;
            right1 = mid1 - 1;
        }
        else if (data[mid1] > k) {
            right1 = mid1 - 1;
        } else {
            left1 = mid1 + 1;
        }
    }

       let left2 = 0;
       let right2 = n - 1;
       let upperBond;
       while (left2 <= right2) {
         let mid2 = left2 + Math.floor((right2 - left2) / 2);
         if (data[mid2] === k) {
           upperBond = mid2;
           left2 = mid2 +1;
         } else if (data[mid2] > k) {
           right2 = mid2 - 1;
         } else {
           left2 = mid2 + 1;
         }
    }

    if (upperBond !== -1 & lowerBond !== -1) {
        let total = upperBond - lowerBond + 1;
      return  console.log(lowerBond, upperBond, total);
    } else {
        return console.log(lowerBond, upperBond, 0);
    }
    

}
if (process.env.USERNAME === "hp") {
  runProgram(`6
1 1 1 2 2 2	
1`);
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
