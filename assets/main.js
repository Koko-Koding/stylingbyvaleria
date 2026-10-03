"use strict";

// Mobile menu
const navToggle = document.querySelector(".nav__toggle");
const navLinks = document.querySelector(".nav__links");

function setNavOpen(open) {
  navToggle.setAttribute("aria-expanded", String(open));
  navLinks.classList.toggle("is-open", open);
}

navToggle.addEventListener("click", () => {
  setNavOpen(navToggle.getAttribute("aria-expanded") !== "true");
});

navLinks.addEventListener("click", (event) => {
  if (event.target.closest("a")) setNavOpen(false);
});

// "Lees meer" toggles on the services
document.querySelectorAll(".service__toggle").forEach((button) => {
  button.addEventListener("click", () => {
    const open = button.closest(".service").classList.toggle("is-open");
    button.setAttribute("aria-expanded", String(open));
    button.textContent = open ? "Lees minder" : "Lees meer";
  });
});

// Keep the copyright year current
document.querySelectorAll("[data-year]").forEach((el) => {
  el.textContent = new Date().getFullYear();
});
