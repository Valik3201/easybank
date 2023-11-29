/**
 * Toggle the visibility of the hamburger menu and its associated elements.
 */
const btnHumburger = document.querySelector("#btnHumburger");
const body = document.querySelector("body");
const header = document.querySelector(".header");
const overlay = document.querySelector(".overlay");
const fadeElements = document.querySelectorAll(".has-fade");

btnHumburger.addEventListener("click", function () {
  if (header.classList.contains("open")) {
    // Close Hamburger Menu
    header.classList.remove("open");
    body.classList.remove("noscroll");

    // Remove fade-in and add fade-out to fade elements
    fadeElements.forEach(function (element) {
      element.classList.remove("fade-in");
      element.classList.add("fade-out");
    });
  } else {
    // Open Hamburger Menu
    body.classList.add("noscroll");
    header.classList.add("open");

    // Remove fade-out and add fade-in to fade elements
    fadeElements.forEach(function (element) {
      element.classList.remove("fade-out");
      element.classList.add("fade-in");
    });
  }
});
