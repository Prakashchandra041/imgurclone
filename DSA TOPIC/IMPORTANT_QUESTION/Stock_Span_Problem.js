let price = [100, 80, 60, 70, 60, 75, 85];
let n = price.length;
let res = [];

for (let i = 0; i < n; i++){
    let day = 0;
    for (let j = i; j >= 0; j--){
        if (price[i] >= price[j]) {
            day++;
        } else {
            break;
        }
    }
    res.push(day);
}

console.log(res);