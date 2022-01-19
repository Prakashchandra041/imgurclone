let eachList = document.getElementById("eachList");
function showMessage() {
  
  let data = document.getElementById("inpVal").value;
  let h1 = document.createElement("h1");
  h1.innerHTML = data;
  h1.style.textDecoration = "line-through";
  h1.style.color = "red";

  let btn = document.createElement("button");
  btn.innerText = "Delete";

  btn.addEventListener("click", () => {
    h1.remove();
    btn.remove();
    toggleBtn.remove();
  });

  let toggleBtn = document.createElement("button");
  toggleBtn.innerText = "Not Done";
  let x = "red";

  toggleBtn.addEventListener("click", () => {
    if (x == "red") {
      h1.style.color = "green";
      h1.style.textDecoration = "none";
      toggleBtn.innerText = "Done";
      x = "green";
    }
    else if (x == "green") {
      h1.style.color = "red";
      h1.style.textDecoration = "line-through";
      toggleBtn.innerText = "Not Done";
      x = "red";
    }

  });
  eachList.append(h1, btn, toggleBtn);

  data = document.getElementById("inpVal").value = "";

  
}
