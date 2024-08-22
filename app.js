let nav = document.querySelector("nav");
let ul = document.querySelector("ul");
let bar = document.querySelector("#bar");
let cross = document.querySelector("#cross");

function navdown() {
  if (ul.classList.contains("open")) {
    ul.classList.remove("open");
    bar.style.display = "block";
    cross.style.display = "none";
  } else {
    ul.classList.add("open");
    bar.style.display = "none";
    cross.style.display = "block";
  }
}
