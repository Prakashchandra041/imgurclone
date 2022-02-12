
function abc() {
    for (var i = 1; i <= 5; i++){
        function close(x) {
           setTimeout(() => {
             console.log(x);
           }, 1000); 
        }
        close(i)
    }
}
abc();