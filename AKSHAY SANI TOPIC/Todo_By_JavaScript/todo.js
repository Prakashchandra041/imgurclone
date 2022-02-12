let list_Body = document.getElementById("list_Body");
var  x = "red";
function showList() {
  let inputvalue = document.getElementById("inputvalue").value;
  let h1 = document.createElement("h1");
  h1.innerHTML = inputvalue;
  h1.style.color = "red";
  let del_btn = document.createElement("button");
  del_btn.innerText = "Delete";
  del_btn.addEventListener("click", () => {
    h1.remove();
  });
  let status_btn = document.createElement("button");
  status_btn.innerText = "Status";

  status_btn.addEventListener("click", () => {
    
    if (x == "red") {
      h1.style.color = "green";
     
      x = "green";
    } else if (x == "green") {
      h1.style.color = "red";
       h1.style.textDecoration = "line-through";
        x = "red";
    }
  });

  h1.append(del_btn, status_btn);
  list_Body.append(h1);
  inputvalue = document.getElementById("inputvalue").value=""

}


function deleteAll() {
  list_Body.remove();
}
