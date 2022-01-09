let n = 5;
 let num = 1;
for (let i = 0; i < n; i++) {
    let res = "";
  for (let j = 0; j < i; j++) {
      res += num+" ";
      num++;
  }
  console.log(res);
}
