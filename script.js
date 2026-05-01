var darkBtn = document.getElementById("darkBtn");
var menuBtn = document.getElementById("menuBtn");
var links = document.querySelector(".links");

darkBtn.onclick = function () {
  document.body.classList.toggle("dark");
};

menuBtn.onclick = function () {
  links.classList.toggle("show");
};