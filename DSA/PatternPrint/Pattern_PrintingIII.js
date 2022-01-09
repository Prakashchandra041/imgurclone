let n = 4;
for (let i = 0; i < n; i++){
    let res = "";
    for (let j = 0; j < n; j++){
        if (i == 0 || i == n-1 || j == n-1) {
            res += "* ";
        } else {
            res += "  ";
        }
    }
    console.log(res);
}