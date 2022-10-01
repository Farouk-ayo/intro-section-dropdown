const eachNavOne = document.querySelectorAll(".eachNavOne");
const navOne = document.querySelectorAll(".navOne");
const eachNavTwo = document.querySelectorAll(".eachNavTwo");
const navTwo = document.querySelectorAll(".navTwo");
const menu = document.querySelector(".menu");
const close = document.querySelector(".close");
const sidebar = document.querySelector(".sidebar");
const arrow = document.querySelectorAll(".arrow");
const arrowTwo = document.querySelectorAll(".arrow2");
const backdrop = document.querySelector(".backdrop");

eachNavOne.forEach((each) => {
  each.addEventListener("click", function () {
    navTwo.forEach((each) => {
      each.classList.add("hidden");
    });
    navOne.forEach((each) => {
      each.classList.toggle("hidden");
    });
    arrow.forEach((each) => {
      each.classList.toggle("rotate-180");
    });
  });
});

eachNavTwo.forEach((each) => {
  each.addEventListener("click", function () {
    navOne.forEach((each) => {
      each.classList.add("hidden");
    });
    navTwo.forEach((each) => {
      each.classList.toggle("hidden");
    });
    arrowTwo.forEach((each) => {
      each.classList.toggle("rotate-180");
    });
  });
});

menu.addEventListener("click", function () {
  sidebar.classList.remove("hidden");
  backdrop.classList.remove("hidden");
});

close.addEventListener("click", function () {
  sidebar.classList.add("hidden");
  backdrop.classList.add("hidden");
});

backdrop.addEventListener("click", function () {
  backdrop.classList.add("hidden");
  sidebar.classList.add("hidden");
});
