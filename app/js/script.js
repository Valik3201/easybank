const btnHumburger = document.querySelector("#btnHumburger");
const body = document.querySelector("body");
const header = document.querySelector(".header");
const overlay = document.querySelector(".overlay");
const fadeElements = document.querySelectorAll(".has-fade");

btnHumburger.addEventListener("click", function () {
  if (header.classList.contains("open")) {
    // Close Humburger Menu
    header.classList.remove("open");
    body.classList.remove("noscroll");
    fadeElements.forEach(function (element) {
      element.classList.remove("fade-in");
      element.classList.add("fade-out");
    });
  } else {
    // Open Humburger Menu
    body.classList.add("noscroll");
    header.classList.add("open");
    fadeElements.forEach(function (element) {
      element.classList.remove("fade-out");
      element.classList.add("fade-in");
    });
  }
});
