let timer;
async function displayUi() {
 let data=   await fetch(
      `https://api.unsplash.com/photos/?client_id=1io4F2tEPKCOM3imbQ-YC2z-Eqbvz7xFfgdmnorMPqk`
    );
    data = await data.json();
    // console.log(data);
    let displayBody = document.getElementById("displayBody");
    data.forEach(({ links: {download} }) => {
      
        let eachDiv = document.createElement("div");
        let eachImg = document.createElement("img");
        let eachP = document.createElement("p");
        eachP.innerHTML = "Prakash";
        eachImg.src = download;
        eachImg.setAttribute("class", "eachImg");

        eachDiv.appendChild(eachImg, eachP)
        displayBody.append(eachDiv);
    })
    
}
displayUi()

function applyingDbouncing() {
    let inputboxDbounceValue = document.getElementById("inputboxDbounce").value;

    if (timer) {
        console.log("start timer");
        return false;
    }
    timer=setTimeout(() => {
        gettingDataDebouncing(inputboxDbounceValue); 
        timer = undefined;
    }, 300);
    console.log("end timer");
   
}
 
async function gettingDataDebouncing(inputValue) {
    let resultScroll = document.getElementById("resultScroll");
    if (inputValue.length > 0) {
       resultScroll.style.display="block"
    } else {
        resultScroll.style.display = "none";
   }
    let data = await fetch(
      `https://pixabay.com/api/?key=24953068-5cedc069b09f5e5b02f2e103b&q=${inputValue}&image_type=photo`
    );
    let { hits } = await data.json();
    

    hits.forEach(({ tags }) => {
        let div = document.createElement("div");
        tags = tags.split(",")[0];
        let h = document.createElement("h4")
        h.innerText = `${tags}`;
        h.addEventListener("click", () => { 
            getit(tags); 
        })
        // console.log(h);
        // console.log(tags);
        div.append(h);
        resultScroll.appendChild(div);
    })

}

async function getit(tags) {
    displayBody.innerHTML = "";
     let data = await fetch(
       `https://pixabay.com/api/?key=24953068-5cedc069b09f5e5b02f2e103b&q=${tags}&image_type=photo`
    );
     let {hits} = await data.json();

     hits.forEach(({ largeImageURL}) => {
       let eachDiv = document.createElement("div");
       let eachImg = document.createElement("img");
       let eachP = document.createElement("p");
       eachP.innerHTML = "Prakash";
       eachImg.src = largeImageURL;
       eachImg.setAttribute("class", "eachImg");

       eachDiv.appendChild(eachImg, eachP);
       displayBody.append(eachDiv);
     });
    console.log(data);
}


//  https://pixabay.com/api/?key=24953068-5cedc069b09f5e5b02f2e103b&q=${ip}&image_type=photo

// 1 fetch input 
// 2 provide that input into that url 
// 3 fetch url with debouncing 
// 4 console  it