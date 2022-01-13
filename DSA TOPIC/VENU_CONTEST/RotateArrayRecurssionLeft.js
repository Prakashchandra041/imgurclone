let data = [1, 2, 3, 4, 5, 6];
let k = 2;
let n = data.length - 1;

function reverse(data, a, b) {
  while (a < b) {
    let temp = data[a];
    data[a] = data[b];
    data[b] = temp;
    a++;
    b--;
  }
}

function rotateArray(data, k) {
    k = k % n;
    reverse(data, 0, n);
    reverse(data, 0, n - k);
    reverse(data, n-k+1, n);
    console.log(data);
}

rotateArray(data,k)