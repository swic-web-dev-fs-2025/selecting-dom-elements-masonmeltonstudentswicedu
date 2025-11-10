import "./style.css";

window.addEventListener("DOMContentLoaded", () => {
  const mainHeader = document.getElementById("main-header");
  console.log(mainHeader);

  const navLinks = document.querySelectorAll(".navbar a");
  console.log("Navbar links:", navLinks.length);

  document.querySelectorAll(".navbar a").forEach((a) => {
    const href = a.getAttribute("href") || "";
    if (href.startsWith("/")) a.textContent += " [internal]";
  });

  document.querySelectorAll("input[required]").forEach((i) => {
    i.style.outline = "2px solid gold";
  });

  document.querySelectorAll(".card").forEach((c) => {
    c.setAttribute("data-viewed", "true");
  });

  const product2Price = document.querySelector('[data-product-id="2"] .price');
  if (product2Price) product2Price.textContent = "$24.99";

  const maybeButton = document.querySelector(".missing-button");
  if (maybeButton) maybeButton.addEventListener("click", () => console.log("Clicked!"));
  else console.log("Button not found — guard works.");

  const titleStable = document.querySelector('[data-title-id="2"]');
  console.log("Stable title (id=2):", titleStable);
  titleStable?.style.setProperty("textDecoration", "underline");

  function getProductTitleById(id) {
    const card = document.querySelector(`[data-product-id="${id}"]`);
    if (!card) return null;
    const title =
      card.querySelector(`[data-title-id="${id}"]`) ||
      card.querySelector(".card-title");
    return title?.textContent ?? null;
  }

  console.log("Product 1 title:", getProductTitleById("1"));
  console.log("Product 2 title:", getProductTitleById("2"));
});