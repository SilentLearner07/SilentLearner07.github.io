let nav = document.querySelector("nav");
let ul = document.querySelector("ul");
let bar = document.querySelector("#bar");
let cross = document.querySelector("#cross");

bar.addEventListener("click", () => {
  nav.style.overflow = "visible";
  bar.style.display = "none";
  cross.style.display = "block";
  ul.style.maxHeight = "300px";
});

cross.addEventListener("click", () => {
  nav.style.overflow = "hidden";
  cross.style.display = "none";
  bar.style.display = "block";
  ul.style.maxHeight = "0px";
});
