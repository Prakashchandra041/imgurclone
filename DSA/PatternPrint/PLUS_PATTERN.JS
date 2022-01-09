
let n= 4;
let m = n * 2 + 1;

for (let i = 0; i < m; i++) {
    let res = "";
    for (let j = 0; j < m;j++){
        if (i == Math.floor(m / 2) || j == Math.floor(m / 2)) {
            res+="* "
        } else {
          res += "  ";
        }
    }
    console.log(res);
}
