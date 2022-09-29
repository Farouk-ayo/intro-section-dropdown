const eachNavOne = document.querySelector(".eachNavOne");
const navOne = document.querySelector(".navOne");
const eachNavTwo = document.querySelector(".eachNavTwo");
const navTwo = document.querySelector(".navTwo");
const menu = document.querySelector(".menu");
const close = document.querySelector(".close");
const sidebar = document.querySelector(".sidebar");

eachNavOne.addEventListener("click", function () {
  navOne.classList.toggle("hidden");
  navOne.classList.add("flex");
  navTwo.classList.add("hidden");
});

eachNavTwo.addEventListener("click", function () {
  navTwo.classList.toggle("hidden");
  navTwo.classList.add("flex");
  navOne.classList.add("hidden");
});

menu.addEventListener("click", function () {
  sidebar.classList.remove("hidden");
});

close.addEventListener("click", function () {
  sidebar.classList.add("hidden");
});
