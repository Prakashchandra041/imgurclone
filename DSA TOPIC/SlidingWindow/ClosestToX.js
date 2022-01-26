/*
Given a sorted array and a number x, find the pair in array whose sum is closest to x
Input: arr[] = {10, 22, 28, 29, 30, 40}, x = 54
Output: 22 and 30
 */
// TWO POINTER IMP
let arr = [10, 22, 28, 29, 30, 40];
let x = 59;

function findclose(arr, x) {
  let l = 0;
  let r = arr.length - 1;
  let resl;
  let resr;
  let sum;
  let diff = 999999;
  while (l < r) {
    if (Math.abs(arr[l] + arr[r] - x) < diff) {
      resl = l;
      resr = r;
      diff = Math.abs(arr[l] + arr[r] - x);
    }
    if (arr[l] + arr[r] < x) {
      l++;
    } else {
      r--;
    }
  }
  console.log(arr[resl], arr[resr]);
}

findclose(arr, x);
