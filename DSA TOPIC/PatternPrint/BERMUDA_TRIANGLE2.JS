let n = 5

for (let i = 1; i <= n; i++) {
    let res = "";
    for (let j = 1; j <= n - i ; j++){
        res += " ";
    }
    for (k = 1; k <= i; k++){
        res += "* ";
        
    }
    console.log(res);
}