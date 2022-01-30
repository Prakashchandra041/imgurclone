let price = [100, 80, 60, 70, 60, 75, 85];
let n = price.length;
let span = [0];
let stack = [1];
console.log("span",span,"stack",stack)

for (let i = 1; i < n; i++) {
  while (stack.length !== 0 && price[stack[stack.length - 1]] <= price[i]) {
    stack.pop();
    }
    if (stack.length == 0) {
        span[i] = i + 1;
    } else {
        span[i] = i - stack[stack.length - 1];
    }
    console.log("span", span, "stack", stack);
  stack.push(i);
}

console.log("Result", span.join(" "));
