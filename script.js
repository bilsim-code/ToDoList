/*
//first Program
const list = document.querySelector("ul");
list.addEventListener(
  "click",
  (ev) => {
    if (ev.target.tagName === "LI") {
      ev.target.classList.toggle("done");
    }
  }, 
  true,
); */

/* let list = document.querySelector("ul");
list.addEventListener("click", (e)=> {
  if(e.target.tagName === "LI") {
    e.target.classList.toggle("done");
  }
}) */

/* let lists = document.querySelectorAll("li");
let images = document.querySelectorAll("img");
lists.forEach(list => {
  list.addEventListener("click", ()=> {
    list.classList.toggle("done");
  })
});

images.forEach(image => {
  image.addEventListener("click", ()=> {
    image.parentElement.remove();
  })
}) */
/* 
let list = document.querySelector("ul");
list.addEventListener("click", (e)=> {
    if(e.target.tagName === "LI") {
      e.target.classList.toggle("done");
    }
  })

  let image = document.querySelectorAll("img");
  image.forEach(img => {
    img.addEventListener("click", (e)=> {
      if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
      }
    })
  }); */

let submit = document.getElementById("submit");
let ul = document.querySelector("ul");
let originalImg = document.querySelectorAll(".myImg");
let input = document.getElementById("input");
let images = document.querySelectorAll(".myImg");
let li = document.querySelectorAll("li");

submit.addEventListener("click", () => {
  if (input.value !== "") {
    let newList = document.createElement("li");
    let img = document.createElement("img");
    img.src = "img/trash.png";
    img.classList.add("myImg");
    newList.innerHTML = input.value;
    ul.appendChild(newList).appendChild(img);
    input.value = "";

    img.addEventListener("click", () => {
      newList.remove();
    });
  }
});

images.forEach((image) => {
  image.addEventListener("click", () => {
    image.parentElement.remove();
  });
});

input.addEventListener("keydown", (e) => {
  if (input.value !== "") {
    if (e.key === "Enter") {
      e.preventDefault();
      let newList = document.createElement("li");
      let img = document.createElement("img");
      img.src = "img/trash.png";
      newList.innerHTML = input.value;
      ul.appendChild(newList).appendChild(img);
      input.value = "";

      img.addEventListener("click", () => {
        newList.remove();
      });
    }
  }
});

ul.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("done");
  }
});
