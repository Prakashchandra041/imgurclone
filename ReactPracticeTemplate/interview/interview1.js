// // let str = "i like icecream vanila icecream is my fav"

// // let obj = {};
// // str = str.split(" ");
// // for (let i = 0; i < str.length; i++){
// //     if (obj[str[i]] == undefined) {
// //         obj[str[i]] = 1;
// //     } else {
// //         obj[str[i]]++
// //     }
// // }
// // let res = "";
// // for (key in obj) {
// //     if (key == "icecream") {
// //         res += obj[key] + " ";
// //     } else {
// //         res += key + " ";
// //     }
// // }

// // console.log(res);
// // 54321;
// // 5432;
// // 543;
// // 54;
// // 5;

// // let n = 5;
// // for (let i = 1; i <= n; i++){
// //     let res = "";
// //     for (let j = n; j >= i; j--){
// //         res += j + " ";
// //     }
// //     console.log(res);
// // }

// // let str = "my name is prakash";
// // str = str.split(" ");

// // let i = 0;
// // let j = str.length - 1;
// // while (i < j) {
// //     let temp = str[i];
// //     str[i] = str[j];
// //     str[j] = temp;
// //     i++;
// //     j--;
// // }

// // console.log(str.join(" "))


// let countries = [
//   { name: "Germany", continent: "Europe" },
//   { name: "Brazil", continent: "South America" },
//   { name: "India", continent: "Asia" },
//   { name: "France", continent: "Europe" },
//   { name: "South Korea", continent: "Asia" },
// ];

// let asiacountry = countries.filter((ele) => {
//     if (ele.continent === "Asia") {
//         return ele;
//     }
// });

// console.log("asiacountry", asiacountry);
// console.log(a);
// let  a = 9;
let max = -999;
let arr = [44, 54,-66];
 arr = arr.sort((a, b) => a - b);
let maxSingle = arr.filter((ele) => {
    if (ele < 10 && ele>-10) {
        return ele;
    }
})
if (maxSingle.length == 0) {
    console.log("No Single element is present")
} else {
    console.log(maxSingle[maxSingle.length - 1]);  
}


  



