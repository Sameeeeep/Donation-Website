
const navItem = document.querySelector('.menu');
function fast() {
   console.log(navItem);
   document.querySelector("#lists").style.display = "flex";
}
function closeNav() {
   document.querySelector("#lists").style.display = "none";
}
const close = document.querySelector("#close");
close.addEventListener("click", closeNav)
navItem.addEventListener("click", fast)