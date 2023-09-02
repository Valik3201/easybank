const btnHumburger = document.querySelector("#btnHumburger");
const header = document.querySelector(".header");
const overlay = document.querySelector(".overlay");

btnHumburger.addEventListener("click", function () {
  if (header.classList.contains("open")) {
    // Close Humburger Menu
    header.classList.remove("open");
    overlay.classList.remove("fade-in");
    overlay.classList.add("fade-out");
  } else {
    // Open Humburger Menu
    header.classList.add("open");
    overlay.classList.remove("fade-out");
    overlay.classList.add("fade-in");
  }
});
