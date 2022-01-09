let n = 7;

for (let i = 1; i <= n; i++){
    let res = "";
    for (let j = 1; j <= n; j++){
        if (i == j||i+j==n+1) {
            res += "* ";
        } else {
            res += "  ";
        }
    }
    console.log(res);
}