// script.js
document.getElementById("scroll").addEventListener("click", function () {
  const targetElement = document.getElementById("sec2");
  const targetPosition = targetElement.offsetTop;

  window.scrollTo({
    top: targetPosition,
    behavior: "smooth", // This adds a smooth scrolling effect
  });
});

document.getElementById("top").addEventListener("click", function () {
  const targetElement = document.getElementById("sec1");
  const targetPosition = targetElement.offsetTop;

  window.scrollTo({
    top: targetPosition,
    behavior: "smooth", // This adds a smooth scrolling effect
  });
});

document.getElementById("projects").addEventListener("click", function () {
  const targetElement = document.getElementById("sec3");
  const targetPosition = targetElement.offsetTop;

  window.scrollTo({
    top: targetPosition,
    behavior: "smooth", // This adds a smooth scrolling effect
  });
});

document.getElementById("contact").addEventListener("click", function () {
  const targetElement = document.getElementById("contactme");
  const targetPosition = targetElement.offsetTop;

  window.scrollTo({
    top: targetPosition,
    behavior: "smooth", // This adds a smooth scrolling effect
  });
});

const scrollUpButton = document.getElementById("scrollUpButton");
const scrollDownButton = document.getElementById("scrollDownButton");

const scrollStep = 100; // Adjust this value as needed

scrollUpButton.addEventListener("click", () => {
  window.scrollBy(0, -scrollStep);
});

scrollDownButton.addEventListener("click", () => {
  window.scrollBy(0, scrollStep);
});

("use strict");

function typeWriter(el) {
  const textArray = el.innerHTML.split("");
  el.innerHTML = "";
  textArray.forEach((letter, i) =>
    setTimeout(() => (el.innerHTML += letter), 155 * i)
  );
  setInterval(() => typeWriter(el), 7000);
}

typeWriter(elementEl);
