const eachNavOne = document.querySelectorAll(".eachNavOne");
const navOne = document.querySelectorAll(".navOne");
const eachNavTwo = document.querySelectorAll(".eachNavTwo");
const navTwo = document.querySelectorAll(".navTwo");
const menu = document.querySelector(".menu");
const close = document.querySelector(".close");
const sidebar = document.querySelector(".sidebar");

eachNavOne.forEach((each) => {
  each.addEventListener("click", function () {
    navTwo.forEach((each) => {
      each.classList.add("hidden");
    });

    navOne.forEach((each) => {
      each.classList.toggle("hidden");
    });
    navOne.forEach((each) => {
      each.add("flex");
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
    navTwo.forEach((each) => {
      each.classList.add("flex");
    });
  });
});

menu.addEventListener("click", function () {
  sidebar.classList.remove("hidden");
});

close.addEventListener("click", function () {
  sidebar.classList.add("hidden");
});
