document.querySelector("#category").addEventListener('click', (e) => {
    console.log( e.target.id);
    // window.location.href = "/"+e.target.id;
    alert(e.target.id)
});




/* good way to select particular category is by the help of even(e)
   and by the help of even.target we can access the required element 
*/