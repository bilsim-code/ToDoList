let button = document.getElementById("input");
let input = document.querySelector("input");
let items = document.querySelector(".to-do-items");
button.addEventListener("click", ()=> {
   
   let myItem = document.createElement("p");
   let image = document.createElement("img");
   image.src = "img/trash.png";
   myItem.classList.add("item");
   myItem.setAttribute("contenteditable", true);
   myItem.innerHTML = input.value;
   items.appendChild(myItem).appendChild(image);
   input.value = "";
   updateList();
})

items.addEventListener("click", (e)=> {
   if(e.target.tagName === "P") {
      e.target.classList.toggle("done");
   }
   if(e.target.tagName === "IMG") {
      e.target.parentElement.remove();
   }
   
   updateList();
})

input.addEventListener("keydown", (e)=> {
   if(e.key === "Enter") {
      let myItem = document.createElement("p");
      let image = document.createElement("img");
      image.src = "img/trash.png";
      myItem.classList.add("item");
      
      myItem.innerHTML = input.value;
      items.appendChild(myItem).appendChild(image);
      input.value = "";
      updateList();
   }
})

function updateList() {
   localStorage.setItem("list", items.innerHTML);
  
}

function setList() {
   items.innerHTML = localStorage.getItem("list");
   
}
setList();


/* // JavaScript
let button = document.getElementById("input");
let input = document.querySelector("input");
button.addEventListener("click", () => {
   let items = document.querySelector(".to-do-items");
   let myItem = document.createElement("p");
   myItem.classList.add("item");
   myItem.classList.add("done");
   myItem.innerHTML = input.value; // Set the content of myItem
   items.appendChild(myItem); // Append the myItem element
   input.value = ""; // Clear the input field
}); */
