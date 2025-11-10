import "./style.css";

window.addEventListener("DOMContentLoaded", () => {
/* Lab 1: Selector Scavenger Hunt */

  const mainHeader = document.getElementById("main-header");
  console.log("[Lab 1] mainHeader:", mainHeader);

  const navLinks = document.querySelectorAll(".navbar a");
  console.log("[Lab 1] .navbar link count:", navLinks.length);

  document.querySelectorAll(".navbar a").forEach((a) => {
    const href = a.getAttribute("href") || "";
    if (href.startsWith("/")) a.textContent += " [internal]";
  });

  document.querySelectorAll("input[required]").forEach((input) => {
    input.style.outline = "2px solid gold";
  });

  document.querySelectorAll(".card").forEach((card) => {
    card.setAttribute("data-viewed", "true");
  });

  const product2Price = document.querySelector('[data-product-id="2"] .price');
  if (product2Price) {
    product2Price.textContent = "$24.99";
  }

  const maybeButton = document.querySelector(".missing-button");
  if (maybeButton) {
    maybeButton.addEventListener("click", () => console.log("Clicked!"));
  } else {
    console.log("[Lab 1] .missing-button not found — guard works.");
  }