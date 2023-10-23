let menuIcon = document.getElementById("menuIcon");
let menu = document.getElementById("menu");
let menuDlt = document.getElementById("menuDlt");
let titleMenuJs = document.getElementById("titleMenuJs");

menuIcon.addEventListener("click", function () {
  if (menu.style.width === "100%") {
    menu.style.width = "0%";
    menuDlt.style.display = "flex";
    titleMenuJs.style.display = "none";
  } else {
    menu.style.width = "100%";
    menuDlt.style.display = "none";
    titleMenuJs.style.display = "block";
  }
});
