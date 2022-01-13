let data = [1,2,3];
let k = 3;
let n = data.length;

let left = 0;
let right = 0;

let sum = data[right];

while (right < n && left < n) {
    if (sum === k) {
        return console.log("Yes");
    }
    
    else if (sum < k) {
        left++;
        sum += data[left];
    }
    else if (sum > k) {
        sum =sum - data[right];
        right++;
    }

    return console.log("no");
}