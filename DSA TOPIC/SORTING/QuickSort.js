function swap(data, i, j) {
    let temp = data[i];
    data[i] = data[j];
    data[j] = temp;
}

function Partition(data, left, right) {
    let pivot = data[right];
    let i = left - 1;
    for (let j = left; j < right - 1; j++){
        if (data[j] <= pivot) {
            i = i + 1;
            swap(data,i,j)
        }
    }
    swap(data, i + 1, right)
    return i+1
}


function FindQuickSort(data, left, right) {
    if (left < right) {
        let q = Partition(data, left, right);
        FindQuickSort(data, left, q - 1);
        FindQuickSort(data, q + 1, right);
    }
}

function runProgram(input) {
  input = input.trim().split("\n");
  let n = +input[0] - 1;
  let data = input[1].trim().split(" ").map(Number);
  let left = 0;
  let right = n;
  FindQuickSort(data, left, right);
  console.log(data.join(" "));
}
if (process.env.USERNAME === "hp") {
  runProgram(`5
3 5 0 9 8`);
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
