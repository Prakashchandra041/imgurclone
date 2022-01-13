function swap(a, b, c) {
  while (b < c) {
    [a[b], a[c]] = [a[c], a[b]];
    b++;
    c--;
  }
  return a;
}

function runProgram(input) {
  const ip = input.split(/[\r\n]+/);
  const test = +ip[0];

  for (let a = 1; a <= test; a++) {
    let arr = ip[2 * a].split(" ").map(Number);

    let [size, d] = ip[2 * a - 1].split(" ").map(Number);

    d = d % size;

    let l = 0;

    swap(arr, 0, size - 1 - d);

    swap(arr, size - d, size - 1);

    swap(arr, l, size - 1);

    console.log(arr.join(" "));
  }
}
if (process.env.USERNAME === "hp") {
  runProgram(`3
3 1
1 2 3
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
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}
