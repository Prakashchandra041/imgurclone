let prom = new Promise((resolve, reject) => {
    if (true) {
        resolve("here data from Sucess");
    } else {
        reject("Here error message form reject");
    }
});


prom.catch((a) => {
    console.log(a);
}).then((e) => {
    console.log(e);
})