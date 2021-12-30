
async function getData() {
    let movieName = document.getElementById("inputId").value;
    let res = await fetch(`http://www.omdbapi.com/?s=${movieName}&apikey=6e884fad&t`);
    let { Search, Response } = await res.json();
    listOfMovies(Search,Response);
   
    


}

 function listOfMovies(list, Response) {
  if (!Response) {
    return;
     }
     console.log(list);
     let movieList = document.getElementById("movieList");
     movieList.style.display = "block";
     movieList.innerHTML = "";
 list.forEach(({ Title, Poster, Year }) => {
   let h3 = document.createElement("h3");
   h3.innerHTML = Title;
     h3.addEventListener("click", () => {
        singleMovie(Title, Poster, Year);
    })
   movieList.append(h3);
 });
     
  console.log("list", list, "response", Response,movieList);
}


 function  singleMovie(Title, Poster, Year){
     document.getElementById("container").innerHTML = "";
     let eachMoive = document.getElementById("eachMoive");
        let img = document.createElement("img");
        // img.setAttribute("id", "eachImg");
        img.src = Poster;

        let p = document.createElement("p");
        p.innerText = Title;

        let p_title = document.createElement("p");
        p_title.innerText = Year;
        eachMoive.append(img,p,p_title)
 }


function deboundingFun(fun, delay) {
    let timer;
    return function () {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fun();
        },delay)
    }
}




let inputFunction = deboundingFun(getData, 300);